import { authorize } from '$lib/server/auth'
import { redirect } from '@sveltejs/kit'

const auth_routes = ['/dashboard', '/snippets/new', '/account']

export const handle = async ({ event, resolve }) => {
	authorize(event)

	const is_protected = auth_routes.some((r) => event.url.pathname.startsWith(r))

	if (is_protected && !event.locals.user) {
		redirect(307, '/auth/login')
	}

	return await resolve(event)
}
