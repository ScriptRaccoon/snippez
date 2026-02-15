import { redirect } from '@sveltejs/kit'

export const GET = async (event) => {
	event.cookies.delete('jwt', { path: '/' })
	redirect(303, '/')
}
