<script lang="ts">
	let { form, data } = $props()
</script>

<header>
	<h1>Account</h1>
</header>

<p>Logged in via GitHub</p>

<p>
	<strong>Username</strong>
	{data.username} <br />
	<strong>Email</strong>
	{data.email}
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
