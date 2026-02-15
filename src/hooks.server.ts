import { JWT_SECRET } from '$env/static/private';
import type { User } from '$lib/types';
import type { RequestEvent } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

function authorize(event: RequestEvent) {
	const token = event.cookies.get('jwt');
	if (!token) return;
	try {
		const { id, login } = jwt.verify(token, JWT_SECRET) as User;
		event.locals.user = { id, login };
	} catch (_) {}
}

export const handle = async ({ event, resolve }) => {
	authorize(event);
	return await resolve(event);
};
