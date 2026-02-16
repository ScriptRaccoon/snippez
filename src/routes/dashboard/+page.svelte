<script lang="ts">
	import SnippetCard from '$lib/components/SnippetCard.svelte'
	let { data } = $props()
</script>

<header>
	<h1>Your snippets</h1>
</header>

<div class="snippets">
	{#each data.snippets as snippet (snippet.id)}
		<SnippetCard {...snippet} />
	{:else}
		<a class="button" href="/snippets/new">Create your first snippet</a>
	{/each}
</div>

<style>
	.snippets {
		display: grid;
		gap: 1rem;
	}
</style>
