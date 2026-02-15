import { JWT_SECRET } from '$env/static/private'
import type { JWTPayload } from '$lib/types'
import { redirect, type RequestEvent } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'

const auth_routes = ['/dashboard', '/snippets/new']

function authorize(event: RequestEvent) {
	const token = event.cookies.get('jwt')
	if (!token) return
	try {
		const { id, username } = jwt.verify(token, JWT_SECRET) as JWTPayload
		event.locals.user = { id, username }
	} catch (_) {}
}

export const handle = async ({ event, resolve }) => {
	authorize(event)

	const is_protected = auth_routes.some((r) => event.url.pathname.startsWith(r))

	if (is_protected && !event.locals.user) {
		redirect(307, '/auth/login')
	}

	return await resolve(event)
}
