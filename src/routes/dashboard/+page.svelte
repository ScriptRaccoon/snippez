<script lang="ts">
	let { data } = $props()
</script>

<h1>Dashboard</h1>

<p>Welcome, {data.user?.username} 👋</p>

<h2>Snippets</h2>

{#if data.snippets.length}
	{#each data.snippets as snippet (snippet.id)}
		<div>
			<div>
				<a href="/snippets/{snippet.id}">
					{snippet.title}
				</a>
				&nbsp;
				{#if snippet.public}
					<span>public</span>
				{:else}
					<span>private</span>
				{/if}
			</div>
			{#if snippet.description}
				<div>{snippet.description}</div>
			{/if}
		</div>
	{/each}
{:else}
	<p>No snippets so far</p>
{/if}
