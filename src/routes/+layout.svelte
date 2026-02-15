<script lang="ts">
	import './app.css'
	import favicon from '$lib/assets/favicon.svg'
	import Nav from '$lib/components/Nav.svelte'

	let { data, children } = $props()
</script>

<svelte:head>
	<title>Snippez</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if data.user}
	<Nav />
{/if}

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		max-width: 600px;
		margin-inline: auto;
		padding-inline: 0.75rem;
	}
</style>
