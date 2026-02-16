<script lang="ts">
	import { Globe, Lock } from 'lucide-svelte'
	let { data } = $props()
</script>

<header>
	<h1>Dashboard</h1>
</header>

<p>Welcome, {data.user?.username} 👋</p>

<section>
	<h2>Your snippets</h2>

	{#if data.snippets.length}
		{#each data.snippets as snippet (snippet.id)}
			<a class="snippet" href="/snippets/{snippet.id}">
				<header class="header">
					<span class="title">{snippet.title}</span>
					{#if snippet.public}
						<Globe size={18} />
					{:else}
						<Lock size={18} />
					{/if}
				</header>
				{#if snippet.description}
					<div class="description">{snippet.description}</div>
				{/if}
			</a>
		{/each}
	{:else}
		<p>No snippets so far</p>
	{/if}
</section>

<style>
	.snippet {
		margin-bottom: 1rem;
		text-decoration: none;
		display: block;
		border: 1px solid var(--outline-color);
		padding: 0.75rem;
		border-radius: 0.5rem;

		.title {
			font-size: 1.25rem;
		}

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 0.25rem;
		}

		.description {
			color: var(--secondary-font-color);
		}
	}
</style>
