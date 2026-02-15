<script lang="ts">
	import { enhance } from '$app/forms'

	let { form } = $props()
</script>

<h1>New Snippet</h1>

<form method="POST" use:enhance>
	<div>
		<label for="title">Title</label>
		<input type="text" name="title" id="title" required />
	</div>

	<div>
		<label for="description">Description</label>
		<textarea name="description" id="description"></textarea>
	</div>

	<div>
		<label for="language">Language</label>
		<input type="text" name="language" id="language" required />
	</div>

	<div>
		<label for="is_public">Public</label>
		<input type="checkbox" name="is_public" id="is_public" />
	</div>

	<div>
		<label for="content">Content</label>
		<textarea name="content" id="content" required></textarea>
	</div>

	<div>
		<button>Submit</button>
	</div>
</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}
