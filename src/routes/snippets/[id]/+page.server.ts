import { query } from '$lib/server/db'
import type { SnippetDetails } from '$lib/types'
import { error } from '@sveltejs/kit'

export const load = async (event) => {
	const user = event.locals.user

	const snippet_id = event.params.id

	const sql = `
        SELECT id, user_id, title, description, language, public, code, views
        FROM snippets
        WHERE id = ?`

	const { rows, err } = await query<SnippetDetails>(sql, [snippet_id])

	if (err) error(500, 'Database error')
	if (!rows.length) error(404, 'Not Found')

	const snippet = rows[0]

	const is_owner = snippet.user_id === user?.id

	const has_access = Boolean(snippet.public) || is_owner
	if (!has_access) error(404, 'Not Found')

	if (!is_owner) {
		const sql_view = `UPDATE snippets SET views = views + 1 WHERE id = ?`
		await query(sql_view, [snippet_id])
	}

	return { snippet, is_owner }
}
