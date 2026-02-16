import type { Attachment } from 'svelte/attachments'

export const resize_textarea: Attachment = (textarea) => {
	if (!(textarea instanceof HTMLTextAreaElement)) return

	textarea.style.height = `${textarea.scrollHeight}px`
	textarea.style.overflowY = 'hidden'

	const adjust = () => {
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	textarea.addEventListener('input', adjust)

	return () => {
		textarea.removeEventListener('input', adjust)
	}
}

export const allow_tab_inputs: Attachment = (textarea) => {
	if (!(textarea instanceof HTMLTextAreaElement)) return

	const handler = (e: KeyboardEvent) => {
		if (e.key !== 'Tab') return
		e.preventDefault()
		const start = textarea.selectionStart
		const end = textarea.selectionEnd
		textarea.value = `${textarea.value.substring(0, start)}\t${textarea.value.substring(end)}`
		textarea.selectionStart = textarea.selectionEnd = start + 1
	}

	textarea.addEventListener('keydown', handler)
	return () => {
		textarea.removeEventListener('keydown', handler)
	}
}
