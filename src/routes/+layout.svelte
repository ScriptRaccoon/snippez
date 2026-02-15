<script lang="ts">
	import './app.css'
	import favicon from '$lib/assets/favicon.svg'
	import Nav from '$lib/components/Nav.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<title>Snippez</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		max-width: 600px;
		margin-inline: auto;
		padding-inline: 1rem;
	}
</style>
