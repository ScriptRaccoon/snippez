<script lang="ts">
	import { page } from '$app/state'

	let { form } = $props()

	let confirm_deletion = $state(false)
</script>

<header>
	<h1>Account</h1>
</header>

<p>
	You are logged in via GitHub as <strong class="username">
		{page.data.user?.username}
	</strong>.
</p>

<div class="actions">
	<a class="button" href="/auth/logout">Logout</a>

	<button
		class="button danger"
		type="button"
		onclick={() => {
			confirm_deletion = true
		}}
		disabled={confirm_deletion}
	>
		Delete account
	</button>
</div>

{#if confirm_deletion}
	<form method="POST" action="?/delete" class="delete-form">
		<p>
			Deleting your account cannot be undone. All your snippets will be deleted as well.
			Click to confirm.
		</p>

		<div class="actions">
			<button
				type="button"
				class="button"
				onclick={() => {
					confirm_deletion = false
				}}
			>
				Cancel
			</button>

			<button class="button danger">Yes, delete my account</button>
		</div>
	</form>
{/if}

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<style>
	.username {
		color: var(--accent-color);
	}

	.actions {
		display: flex;
		justify-content: space-between;
	}

	.delete-form {
		margin-top: 2rem;
	}

	.delete-form .actions {
		flex-direction: row-reverse;
	}
</style>
