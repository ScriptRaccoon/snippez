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
	public: 0 | 1
}

export type SnippetDetails = {
	id: string
	user_id: number
	title: string
	description: string | null
	language: string
	public: 0 | 1
	code: string
	views: number
}

export type SnippetDetailsWithUser = SnippetDetails & { username: string }
