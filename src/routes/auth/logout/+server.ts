import { remove_auth_cookie } from '$lib/server/auth'
import { redirect } from '@sveltejs/kit'

export const GET = async (event) => {
	remove_auth_cookie(event)
	redirect(303, '/')
}
