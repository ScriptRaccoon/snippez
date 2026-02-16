import { codeToHtml } from 'shiki'

const THEME = 'slack-dark'

export async function get_highlighted_code(code: string, lang: string) {
	try {
		return await codeToHtml(code, { lang, theme: THEME })
	} catch (_) {
		return await codeToHtml(code, { lang: 'text', theme: THEME })
	}
}
