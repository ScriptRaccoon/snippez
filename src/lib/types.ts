export type JWTPayload = {
	id: number
	username: string
}

export type GitHubUser = {
	id: number
	login: string
}

export type SnippetDetails = {
	id: string
	user_id: number
	title: string
	description: string | null
	language: string
	public: 0 | 1
	content: string
	views: number
}
