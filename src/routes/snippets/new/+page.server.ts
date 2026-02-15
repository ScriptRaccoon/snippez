import { query } from '$lib/server/db'
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
		const content = form.get('content') as string

		const id = crypto.randomUUID()

		const sql = `
            INSERT INTO snippets
                (id, user_id, title, description, language, public, content)
            VALUES (?, ?, ?, ?, ?, ?, ?)`

		const args = [id, user.id, title, description, language, is_public, content]

		const { err } = await query(sql, args)

		if (err) return fail(500, { error: 'Database error' })

		redirect(303, '/dashboard')
	}
}
