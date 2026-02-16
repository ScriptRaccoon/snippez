import { GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI } from '$env/static/private'
import { redirect } from '@sveltejs/kit'
import crypto from 'node:crypto'

export const GET = async (event) => {
	const state = crypto.randomBytes(16).toString('hex')

	event.cookies.set('oauth_state', state, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: true,
		maxAge: 60 * 5
	})

	const params = new URLSearchParams({
		client_id: GITHUB_CLIENT_ID,
		redirect_uri: GITHUB_REDIRECT_URI,
		state
	})

	const url = `https://github.com/login/oauth/authorize?${params}`

	redirect(302, url)
}
