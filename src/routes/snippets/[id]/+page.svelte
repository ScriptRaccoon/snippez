<script lang="ts">
	let { data } = $props()
</script>

<h1>Snippet Page</h1>

{#if data.is_owner}
	<a href="/snippets/{data.snippet.id}/edit">Edit</a>
{/if}

<pre>{JSON.stringify(data.snippet, null, 4)}</pre>
