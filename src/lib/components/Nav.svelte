<script>
	import { page } from '$app/state'
</script>

<nav>
	<ul>
		{#if page.data.user}
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/dashboard">Dashboard</a>
			</li>
			<li>
				<a href="/auth/logout">Logout</a>
			</li>
		{:else}
			<li>
				<a href="/auth/login">Login</a>
			</li>
		{/if}
	</ul>
</nav>

<style>
	ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	nav {
		padding-block: 1rem;
	}
</style>
