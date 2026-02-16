import { query } from '$lib/server/db'
import { get_highlighted_code } from '$lib/server/highlight.js'
import type { SnippetDetailsWithUser } from '$lib/types'
import { error } from '@sveltejs/kit'

export const load = async (event) => {
	const user = event.locals.user

	const snippet_id = event.params.id

	const sql = `
        SELECT
			s.id, user_id, title, description, language,
			code, is_public, views, username
        FROM snippets s
		INNER JOIN users
		ON s.user_id = users.id
        WHERE s.id = ?`

	const { rows, err } = await query<SnippetDetailsWithUser>(sql, [snippet_id])

	if (err) error(500, 'Database error')
	if (!rows.length) error(404, 'Not Found')

	const snippet = rows[0]

	const is_owner = snippet.user_id === user?.id

	const has_access = Boolean(snippet.is_public) || is_owner
	if (!has_access) error(404, 'Not Found')

	const highlighted_code = await get_highlighted_code(snippet.code, snippet.language)

	if (!is_owner) {
		const sql_view = `UPDATE snippets SET views = views + 1 WHERE id = ?`
		await query(sql_view, [snippet_id])
	}

	return { snippet, is_owner, highlighted_code }
}
