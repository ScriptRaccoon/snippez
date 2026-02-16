import { query } from '$lib/server/db'
import type { SnippetDetails } from '$lib/types'
import { error, fail, redirect } from '@sveltejs/kit'
import { validate_snippet } from '$lib/server/schemas'

export const load = async (event) => {
	const user = event.locals.user
	if (!user) redirect(307, '/auth/login')

	const snippet_id = event.params.id

	const sql = `
        SELECT id, user_id, title, description, language, public, code, views
        FROM snippets
        WHERE id = ? AND user_id = ?`

	const { rows, err } = await query<SnippetDetails>(sql, [snippet_id, user.id])

	if (err) error(500, 'Database error')
	if (!rows.length) error(404, 'Not Found')

	const snippet = rows[0]

	return { snippet }
}

export const actions = {
	update: async (event) => {
		const user = event.locals.user
		if (!user) redirect(307, '/auth/login')

		const snippet_id = event.params.id

		const form = await event.request.formData()

		const title = form.get('title') as string
		const description = (form.get('description') as string) || null
		const language = form.get('language') as string
		const is_public = form.get('is_public') ? 1 : 0
		const code = form.get('code') as string

		const { validation_error } = validate_snippet({ title, description, language, code })
		if (validation_error) return fail(400, { error: validation_error })

		const sql = `
			UPDATE snippets
			SET
				title = ?,
				description = ?,
				language = ?,
				public = ?,
				code = ?
			WHERE id = ? AND user_id = ?`

		const args = [title, description, language, is_public, code, snippet_id, user.id]

		const { err } = await query(sql, args)

		if (err) return fail(500, { error: 'Database error' })

		redirect(303, `/snippets/${snippet_id}`)
	},

	delete: async (event) => {
		const user = event.locals.user
		if (!user) redirect(307, '/auth/login')

		const snippet_id = event.params.id

		const sql = `DELETE FROM snippets WHERE id = ? AND user_id = ?`

		const { err } = await query(sql, [snippet_id, user.id])
		if (err) return fail(500, { error: 'Database error' })

		redirect(303, `/dashboard`)
	}
}
