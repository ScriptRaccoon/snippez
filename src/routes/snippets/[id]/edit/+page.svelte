<script lang="ts">
	import { enhance } from '$app/forms'

	let { data, form } = $props()
</script>

<h1>Edit Snippet</h1>

<form action="?/update" method="POST" use:enhance>
	<div>
		<label for="title">Title</label>
		<input type="text" name="title" id="title" required value={data.snippet.title} />
	</div>

	<div>
		<label for="description">Description</label>
		<textarea name="description" id="description">{data.snippet.description}</textarea>
	</div>

	<div>
		<label for="language">Language</label>
		<input
			type="text"
			name="language"
			id="language"
			required
			value={data.snippet.language}
		/>
	</div>

	<div>
		<label for="is_public">Public</label>
		<input
			type="checkbox"
			name="is_public"
			id="is_public"
			checked={Boolean(data.snippet.public)}
		/>
	</div>

	<div>
		<label for="content">Content</label>
		<textarea name="content" id="content" required>{data.snippet.content}</textarea>
	</div>

	<div>
		<button>Update</button>
	</div>
</form>

<h2>Danger Zone</h2>

<form method="POST" action="?/delete" use:enhance>
	<button>Delete snippet</button>
</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}
