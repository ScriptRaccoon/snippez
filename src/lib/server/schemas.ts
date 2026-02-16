import * as v from 'valibot'

const title_schema = v.pipe(
	v.string('Title must be a string'),
	v.nonEmpty('Title is required'),
	v.maxLength(100, 'Title must be at most 100 characters long')
)

const description_schema = v.pipe(
	v.string('Description must be a string'),
	v.maxLength(1000, 'Description must be at most 1000 characters long')
)

const language_schema = v.pipe(
	v.string('Language must be a string'),
	v.nonEmpty('Language is required'),
	v.maxLength(50, 'Language must be at most 50 characters long')
)

const code_schema = v.pipe(
	v.string('Code must be a string'),
	v.nonEmpty('Code is required'),
	v.maxLength(10_000, 'Code must be at most 10000 characters long')
)

export function validate_snippet(data: {
	title: unknown
	description: unknown
	language: unknown
	code: unknown
}): { validation_error: null | string } {
	const parsed_title = v.safeParse(title_schema, data.title)
	if (!parsed_title.success) {
		return { validation_error: parsed_title.issues[0].message }
	}

	const parsed_description = v.safeParse(description_schema, data.description)
	if (!parsed_description.success) {
		return { validation_error: parsed_description.issues[0].message }
	}

	const parsed_language = v.safeParse(language_schema, data.language)
	if (!parsed_language.success) {
		return { validation_error: parsed_language.issues[0].message }
	}

	const parsed_code = v.safeParse(code_schema, data.code)
	if (!parsed_code.success) {
		return { validation_error: parsed_code.issues[0].message }
	}

	return { validation_error: null }
}
