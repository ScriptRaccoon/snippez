<script lang="ts">
	import { page } from '$app/state'
	import { Globe, Lock, Eye, CheckCheck, House } from 'lucide-svelte'

	let { data } = $props()

	let copied_code = $state(false)
	let copied_url = $state(false)

	async function copy_code() {
		await navigator.clipboard.writeText(data.snippet.code)
		copied_code = true
		setTimeout(() => {
			copied_code = false
		}, 2000)
	}

	async function copy_url() {
		const url = `${page.url.href}`
		await navigator.clipboard.writeText(url)
		copied_url = true
		setTimeout(() => {
			copied_url = false
		}, 2000)
	}
</script>

{#if !data.is_owner}
	<nav>
		<div>
			A snippet by
			<strong>{data.snippet.username}</strong>
		</div>
		<a href="/" aria-label="Homepage">
			<House size={20} />
		</a>
	</nav>
{/if}

<header>
	<h1>{data.snippet.title}</h1>

	{#if data.snippet.is_public}
		<Globe size={20} />
		<span class="sr-only">Public</span>
	{:else}
		<Lock size={20} />
		<span class="sr-only">Private</span>
	{/if}
</header>

{#if data.snippet.description}
	<p class="description">{data.snippet.description}</p>
{/if}

<div class="data">
	<span class="language" aria-label="language">{data.snippet.language}</span>
	<span class="views" aria-hidden="true">
		<Eye size={18} />
		{data.snippet.views}
	</span>

	<span class="sr-only">{data.snippet.views} views</span>
</div>

<div class="code-block-container">
	{@html data.highlighted_code}
</div>

<div class="actions">
	<button class="button" onclick={copy_url}>
		{#if copied_url}
			Copied URL <CheckCheck size={18} />
		{:else}
			Copy URL
		{/if}
	</button>
	<button class="button" onclick={copy_code}>
		{#if copied_code}
			Copied code <CheckCheck size={18} />
		{:else}
			Copy code
		{/if}
	</button>

	{#if data.is_owner}
		<a class="edit-link button" href="/snippets/{data.snippet.id}/edit">Edit</a>
	{/if}
</div>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 1rem 0.5rem;
	}
	header {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}

	.description {
		margin-block: -1rem 1.5rem;
		color: var(--secondary-font-color);
		font-size: 1.125rem;
	}

	.data {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.views {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--secondary-font-color);
	}

	.code-block-container {
		margin-block: 1rem;

		:global(pre) {
			outline: 1px solid var(--outline-color);
			overflow-x: auto;
			padding: 1rem;
			border-radius: 0.25rem;
			scrollbar-width: thin;
		}
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.edit-link {
		margin-left: auto;
	}
</style>
