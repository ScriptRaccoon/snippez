<script lang="ts">
	import { page } from '$app/state'

	let { form } = $props()
</script>

<header>
	<h1>Account</h1>
</header>

<p>Logged in via GitHub</p>

<p>
	<strong>Username</strong> &ndash;
	{page.data.user?.username} <br />
	<strong>Email</strong> &ndash;
	{page.data.user?.email}
</p>

<p>
	<a class="button" href="/auth/logout">Logout</a>
</p>

<form method="POST" action="?/delete">
	<button class="button">Delete account</button>
</form>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}
