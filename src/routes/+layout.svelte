<script lang="ts">
	import './app.css'
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
