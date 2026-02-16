import { query } from '$lib/server/db'
import { validate_snippet } from '$lib/server/schemas'
import { fail, redirect } from '@sveltejs/kit'
import crypto from 'node:crypto'

export const actions = {
	default: async (event) => {
		const user = event.locals.user
		if (!user) redirect(307, '/auth/login')

		const form = await event.request.formData()

		const title = form.get('title') as string
		const description = (form.get('description') as string) || null
		const language = form.get('language') as string
		const is_public = form.get('is_public') ? 1 : 0
		const code = form.get('code') as string

		const { validation_error } = validate_snippet({ title, description, language, code })
		if (validation_error) return fail(400, { error: validation_error })

		const id = crypto.randomUUID()

		const sql = `
            INSERT INTO snippets
                (id, user_id, title, description, language, public, code)
            VALUES (?, ?, ?, ?, ?, ?, ?)`

		const args = [id, user.id, title, description, language, is_public, code]

		const { err } = await query(sql, args)

		if (err) return fail(500, { error: 'Database error' })

		redirect(303, '/dashboard')
	}
}
