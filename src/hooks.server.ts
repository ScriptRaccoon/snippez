import { JWT_SECRET } from '$env/static/private'
import type { JWTPayload } from '$lib/types'
import type { RequestEvent } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'

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
	return await resolve(event)
}
