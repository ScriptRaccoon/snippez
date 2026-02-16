# Snippez

https://snippez.netlify.app

A minimal code snippet app.

Sign in with GitHub, create snippets, and share them publicly or keep them private.

<br /><img src="https://github.com/user-attachments/assets/2a5da6ff-a23c-429f-be75-fe9701676b27" width="350" alt="preview of a CSS snippet" />

## Stack

- **SvelteKit:** Fullstack framework (routing, server endpoints, SSR).

- **SQLite:** Relational database for users and snippets.

- **Turso:** Hosted SQLite deployment.

- **JWT:** Stateless authentication via http_only cookies.

- **Valibot:** Schema-based input validation for all user data.

- **Shiki:** Server-side syntax highlighting.

- **Lucide:** Icon set for UI elements.

## Notes

- Manual GitHub OAuth implementation (no auth framework)
- No ORM
