<script lang="ts">
	import { enhance } from '$app/forms'
	import { allow_tab_inputs, resize_textarea } from '$lib/client/utilts'

	let { data, form } = $props()

	let confirm_deletion = $state(false)
</script>

<header>
	<h1>Edit Snippet</h1>
</header>

<form action="?/update" method="POST" use:enhance>
	<div class="form-group">
		<label class="label" for="title">Title</label>
		<input
			class="input"
			type="text"
			name="title"
			id="title"
			required
			value={data.snippet.title}
		/>
	</div>

	<div class="form-group">
		<label class="label" for="description">Description</label>
		<textarea class="input" name="description" id="description" {@attach resize_textarea}
			>{data.snippet.description}</textarea
		>
	</div>

	<div class="form-group">
		<label class="label" for="language">Language</label>
		<input
			class="input code"
			type="text"
			name="language"
			id="language"
			required
			value={data.snippet.language}
		/>
	</div>

	<div class="form-group">
		<label class="label" for="is_public">Public</label>
		<input
			type="checkbox"
			name="is_public"
			id="is_public"
			checked={Boolean(data.snippet.public)}
		/>
	</div>

	<div class="form-group">
		<label class="label" for="content">Code</label>
		<textarea
			class="input code"
			name="code"
			id="code"
			required
			{@attach resize_textarea}
			{@attach allow_tab_inputs}>{data.snippet.code}</textarea
		>
	</div>

	<div class="actions">
		<button class="button">Update</button>
		{#if confirm_deletion}
			<button class="button" formaction="?/delete"> Delete snippet</button>
		{:else}
			<button
				class="button"
				type="button"
				onclick={() => {
					confirm_deletion = true
				}}
			>
				Delete snippet</button
			>
		{/if}
	</div>

	{#if confirm_deletion}
		<p>Are you sure that you want to delete the snippet? Click again to confirm.</p>
	{/if}
</form>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<style>
	.actions {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
</style>
