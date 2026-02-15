import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, JWT_SECRET } from '$env/static/private'
import { error, redirect } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'

const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token'
const GITHUB_USER_URL = 'https://api.github.com/user'

export const GET = async (event) => {
	const params = event.url.searchParams
	const code = params.get('code')
	const state = params.get('state')
	const stored_state = event.cookies.get('oauth_state')

	if (!code || !state || state !== stored_state) {
		error(400, 'Invalid OAuth state')
	}

	const token_res = await event.fetch(GITHUB_ACCESS_TOKEN_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			client_id: GITHUB_CLIENT_ID,
			client_secret: GITHUB_CLIENT_SECRET,
			code
		})
	})

	if (!token_res.ok) error(500, 'Token exchange failed')

	const token_data = await token_res.json()

	if (!token_data.access_token) error(400, 'Token exchange failed')

	const user_res = await event.fetch(GITHUB_USER_URL, {
		headers: {
			Authorization: `Bearer ${token_data.access_token}`
		}
	})

	if (!user_res.ok) error(400, 'Token exchange failed')

	const github_user = await user_res.json()

	const payload = {
		id: github_user.id,
		login: github_user.login
	}

	const token = jwt.sign(payload, JWT_SECRET)

	event.cookies.set('jwt', token, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: true
	})

	event.cookies.delete('oauth_state', { path: '/' })

	redirect(302, '/')
}
