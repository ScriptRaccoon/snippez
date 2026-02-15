<script lang="ts">
	import { enhance } from '$app/forms'

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
		<textarea class="input" name="description" id="description"></textarea>
	</div>

	<div class="form-group">
		<label class="label" for="language">Language</label>
		<input class="input" type="text" name="language" id="language" required />
	</div>

	<div class="form-group">
		<label class="label" for="is_public">Public</label>
		<input type="checkbox" name="is_public" id="is_public" />
	</div>

	<div class="form-group">
		<label class="label" for="content">Content</label>
		<textarea class="input" name="content" id="content" required></textarea>
	</div>

	<div>
		<button class="button">Submit</button>
	</div>
</form>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}
