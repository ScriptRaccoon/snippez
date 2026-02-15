import { query } from '$lib/server/db'
import { error, redirect } from '@sveltejs/kit'

export const load = async (event) => {
	const user = event.locals.user
	if (!user) redirect(307, '/auth/login')

	const sql = `
        SELECT id, title, description, public
        FROM snippets
        WHERE user_id = ?
		ORDER BY created_at DESC`

	const { rows: snippets, err } = await query<{
		id: string
		title: string
		description: string
		public: 0 | 1
	}>(sql, [user.id])

	if (err) error(500, 'Database error')

	return { snippets }
}
