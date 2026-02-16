import { JWT_SECRET } from '$env/static/private'
import type { User } from '$lib/types'
import type { RequestEvent } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'

const JWT_COOKIE_NAME = 'jwt'

export function authorize(event: RequestEvent) {
	const token = event.cookies.get(JWT_COOKIE_NAME)
	if (!token) return
	try {
		const { id, username } = jwt.verify(token, JWT_SECRET) as User
		event.locals.user = { id, username }
	} catch (_) {}
}

export function set_auth_cookie(event: RequestEvent, payload: User) {
	const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })

	event.cookies.set(JWT_COOKIE_NAME, token, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: true,
		maxAge: 60 * 60 * 24
	})
}

export function remove_auth_cookie(event: RequestEvent) {
	event.cookies.delete(JWT_COOKIE_NAME, { path: '/' })
}
