<script lang="ts">
	import { enhance } from '$app/forms'
	import { resize_textarea } from '$lib/client/utilts'

	let { form } = $props()
</script>

<header>
	<h1>New Snippet</h1>
</header>

<form method="POST" use:enhance>
	<div class="form-group">
		<label class="label" for="title">Title</label>
		<input class="input" type="text" name="title" id="title" required />
	</div>

	<div class="form-group">
		<label class="label" for="description">Description</label>
		<textarea class="input" name="description" {@attach resize_textarea} id="description"
		></textarea>
	</div>

	<div class="form-group">
		<label class="label" for="language">Language</label>
		<input class="input code" type="text" name="language" id="language" required />
	</div>

	<div class="form-group">
		<label class="label" for="is_public">Public</label>
		<input type="checkbox" name="is_public" id="is_public" />
	</div>

	<div class="form-group">
		<label class="label" for="code">Code</label>
		<textarea {@attach resize_textarea} class="input code" name="code" id="code" required
		></textarea>
	</div>

	<div>
		<button class="button">Submit</button>
	</div>
</form>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}
