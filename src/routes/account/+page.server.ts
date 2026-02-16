import { remove_auth_cookie } from '$lib/server/auth'
import { query } from '$lib/server/db'
import { fail, redirect } from '@sveltejs/kit'

export const actions = {
	delete: async (event) => {
		const user = event.locals.user
		if (!user) redirect(307, '/auth/login')

		const sql = `DELETE FROM users WHERE id = ?`

		const { err } = await query(sql, [user.id])

		if (err) return fail(500, { error: 'Database error' })

		remove_auth_cookie(event)

		redirect(303, '/')
	}
}
