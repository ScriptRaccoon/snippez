<script lang="ts">
	import { enhance } from '$app/forms'

	let { data, form } = $props()
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
		<textarea class="input" name="description" id="description"
			>{data.snippet.description}</textarea
		>
	</div>

	<div class="form-group">
		<label class="label" for="language">Language</label>
		<input
			class="input"
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
		<label class="label" for="content">Content</label>
		<textarea class="input" name="content" id="content" required
			>{data.snippet.content}</textarea
		>
	</div>

	<div class="actions">
		<button class="button">Update</button>
		<button class="button" formaction="?/delete"> Delete snippet</button>
	</div>
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
