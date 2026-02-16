<script lang="ts">
	import { page } from '$app/state'
</script>

<header>
	<h1>Snippez</h1>
</header>

<main>
	<p>Create code snippets and share them with others.</p>

	{#if page.data.user}
		<p>
			Go to your <a href="/dashboard">dashboard</a>.
		</p>
	{:else}
		<p>
			To get started, <a href="/auth/login">log in with GitHub</a>.
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

	footer {
		position: absolute;
		bottom: 1rem;
		left: 0;
		right: 0;
		color: var(--secondary-font-color);
		text-align: center;
	}
</style>
