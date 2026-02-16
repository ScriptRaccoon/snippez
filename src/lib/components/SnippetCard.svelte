<script lang="ts">
	import type { SnippetSummary } from '$lib/types'
	import { Globe, Lock } from 'lucide-svelte'

	let { id, title, is_public, description }: SnippetSummary = $props()
</script>

<a class="snippet" href="/snippets/{id}">
	<header>
		<div class="title">{title}</div>
		{#if is_public}
			<Globe size={18} />
			<span class="sr-only">Public</span>
		{:else}
			<Lock size={18} />
			<span class="sr-only">Private</span>
		{/if}
	</header>

	{#if description}
		<div class="description">{description}</div>
	{/if}
</a>

<style>
	.snippet {
		text-decoration: none;
		border: 1px solid var(--outline-color);
		background-color: var(--card-color);
		padding: 0.75rem;
		border-radius: 0.5rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 1.25rem;
	}

	.description {
		margin-top: 0.25rem;
		color: var(--secondary-font-color);
	}
</style>
