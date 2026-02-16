<script lang="ts">
	import { page } from '$app/state'

	let { form } = $props()

	let confirm_deletion = $state(false)
</script>

<header>
	<h1>Account</h1>
</header>

<p>Logged in via GitHub as <strong>{page.data.user?.username}</strong></p>

<p>
	<a class="button" href="/auth/logout">Logout</a>
</p>

<form method="POST" action="?/delete">
	{#if confirm_deletion}
		<p>
			Deleting your account cannot be undone. All your snippets will be deleted as well.
			Please confirm.
		</p>
		<button class="button">Delete account</button>
	{:else}
		<button
			class="button"
			type="button"
			onclick={() => {
				confirm_deletion = true
			}}
		>
			Delete account
		</button>
	{/if}
</form>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}
