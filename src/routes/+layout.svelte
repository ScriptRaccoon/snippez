<script lang="ts">
	import './app.css'
	import Nav from '$lib/components/Nav.svelte'

	let { data, children } = $props()
</script>

<svelte:head>
	<title>Snippez</title>

	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Snippez" />
	<link rel="manifest" href="/site.webmanifest" />

	<meta property="og:title" content="Snippez" />
	<meta
		property="og:description"
		content="Create code snippets and share them with others."
	/>
	<meta name="description" content="Create code snippets and share them with others." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://snippez.netlify.app" />
	<meta property="og:site_name" content="Snippez" />
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
		padding-inline: 1rem;
	}
</style>
