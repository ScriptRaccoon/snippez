<script lang="ts">
	import { Globe, Lock, Eye } from 'lucide-svelte'

	let { data } = $props()
</script>

<header>
	<h1>{data.snippet.title}</h1>

	{#if data.snippet.public}
		<Globe size={20} />
	{:else}
		<Lock size={20} />
	{/if}
</header>

{#if data.snippet.description}
	<p class="description">{data.snippet.description}</p>
{/if}

<div class="data">
	<span class="language" aria-label="language">{data.snippet.language}</span>
	<span class="views">
		<Eye size={18} />
		{data.snippet.views}
	</span>
</div>

<pre class="code-block">{data.snippet.content}</pre>

{#if data.is_owner}
	<p>
		<a class="button" href="/snippets/{data.snippet.id}/edit">Edit</a>
	</p>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.description {
		color: var(--secondary-font-color);
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

	.code-block {
		margin-block: 2rem;
		overflow-x: auto;
		background-color: var(--code-bg-color);
		outline: 1px solid var(--outline-color);
		padding: 0.5rem;
		border-radius: 0.25rem;
	}
</style>
