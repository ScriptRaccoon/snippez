import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
	const user = event.locals.user
	if (!user) redirect(307, '/auth/login')
}
