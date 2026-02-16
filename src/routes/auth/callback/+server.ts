import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private'
import { OAUTH_COOKIE_NAME } from '../config'
import { query } from '$lib/server/db'
import type { GitHubUser, User } from '$lib/types'
import { error, redirect } from '@sveltejs/kit'
import { set_auth_cookie } from '$lib/server/auth'

const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token'
const GITHUB_USER_API_URL = 'https://api.github.com/user'

export const GET = async (event) => {
	const params = event.url.searchParams
	const code = params.get('code')
	const state = params.get('state')
	const stored_state = event.cookies.get(OAUTH_COOKIE_NAME)

	if (!code || !state) {
		error(400, 'Invalid OAuth state')
	}

	if (state !== stored_state) {
		error(403, 'Invalid OAuth state')
	}

	const token_res = await event.fetch(GITHUB_ACCESS_TOKEN_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({
			client_id: GITHUB_CLIENT_ID,
			client_secret: GITHUB_CLIENT_SECRET,
			code
		})
	})

	if (!token_res.ok) error(502, 'Token exchange failed')

	const token_data = await token_res.json()

	if (!token_data.access_token) error(401, 'Authentication failed')

	const user_res = await event.fetch(GITHUB_USER_API_URL, {
		headers: {
			Authorization: `Bearer ${token_data.access_token}`
		}
	})

	if (!user_res.ok) error(401, 'Failed to fetch GitHub user')

	const github_user = (await user_res.json()) as GitHubUser

	const { id, login, avatar_url } = github_user

	const sql = `
		INSERT INTO users
			(github_id, username, avatar_url)
		VALUES (?, ?, ?)
		ON CONFLICT (github_id) DO UPDATE SET
			username = excluded.username,
			avatar_url = excluded.avatar_url
		RETURNING id`

	const { rows, err } = await query<{ id: number }>(sql, [id, login, avatar_url])

	if (err || !rows.length) error(500, 'Database error')

	const user: User = { id: rows[0].id, username: login, avatar_url }

	set_auth_cookie(event, user)

	event.cookies.delete(OAUTH_COOKIE_NAME, { path: '/' })

	redirect(303, '/dashboard')
}
