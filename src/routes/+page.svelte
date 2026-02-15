<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>SvelteKit GitHub OAuth Example</title>
</svelte:head>

<header>
	<h1>SvelteKit GitHub OAuth Example</h1>
</header>

<p>Welcome, {data.user.username} 👋</p>
