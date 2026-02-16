export type User = {
	id: number
	username: string
	avatar_url: string
}

export type GitHubUser = {
	id: number
	avatar_url: string
	login: string
}

export type SnippetSummary = {
	id: string
	title: string
	description: string
	is_public: 0 | 1
}

export type SnippetDetails = SnippetSummary & {
	user_id: number
	language: string
	code: string
	views: number
}

export type SnippetDetailsWithUser = SnippetDetails & { username: string }
