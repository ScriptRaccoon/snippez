<script lang="ts">
	import { page } from '$app/state'
	import { Github } from 'lucide-svelte'
</script>

<header>
	<h1>Snippez</h1>
</header>

<main>
	{#if page.data.user}
		<p>
			Welcome back, {page.data.user.username}. Go to your
			<a href="/dashboard">dashboard</a>.
		</p>
	{:else}
		<p>Create code snippets and share them with others.</p>
		<p class="login-link-container">
			<a href="/auth/login" class="button login-link"
				>Log in with GitHub
				<Github size={20} />
			</a>
		</p>
	{/if}
</main>

<footer>
	This code for this application is on <a
		href="https://github.com/ScriptRaccoon/snippez"
		target="_blank">GitHub</a
	>.
</footer>

<style>
	main {
		font-size: 1.25rem;
	}

	.login-link-container {
		text-align: center;
	}

	.login-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	footer {
		position: absolute;
		bottom: 1rem;
		left: 0;
		right: 0;
		color: var(--secondary-font-color);
		text-align: center;
	}
</style>
