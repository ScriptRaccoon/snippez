<script lang="ts">
	import SnippetCard from '$lib/components/SnippetCard.svelte'
	let { data } = $props()
</script>

<header>
	<h1>Your snippets</h1>
</header>

{#if data.snippets.length}
	<div class="snippets">
		{#each data.snippets as snippet (snippet.id)}
			<SnippetCard {...snippet} />
		{/each}
	</div>
{:else}
	<a class="button" href="/snippets/new">Create your first snippet</a>
{/if}

<style>
	.snippets {
		display: grid;
		gap: 1rem;
	}
</style>
