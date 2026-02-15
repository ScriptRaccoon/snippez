import { query } from '$lib/server/db'
import { error, fail, redirect } from '@sveltejs/kit'

export const load = async (event) => {
	const user = event.locals.user
	if (!user) redirect(307, '/auth/login')

	const sql = `
        SELECT username, email
        FROM users
        WHERE id = ?`

	const { rows, err } = await query<{ username: string; email: string }>(sql, [user.id])
	if (err || !rows.length) error(500, 'Database error')

	const { username, email } = rows[0]

	return { username, email }
}

export const actions = {
	delete: async (event) => {
		const user = event.locals.user
		if (!user) redirect(307, '/auth/login')

		const sql = `DELETE FROM users WHERE id = ?`

		const { err } = await query(sql, [user.id])

		if (err) return fail(500, { error: 'Database error' })

		event.cookies.delete('jwt', { path: '/' })

		redirect(303, '/')
	}
}
