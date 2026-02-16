# Snippez

https://snippez.netlify.app

A minimal code snippet app.

Sign in with GitHub, create snippets, and share them publicly or keep them private.

<br /><img src="https://github.com/user-attachments/assets/186d1868-da2d-4284-95bc-8e5ccf274a56" width="350" alt="preview of a CSS snippet" />


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
