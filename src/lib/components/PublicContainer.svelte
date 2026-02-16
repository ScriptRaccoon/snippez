<script lang="ts">
	let { is_public = $bindable() }: { is_public: boolean } = $props()
</script>

<div>
	{#if is_public}
		<div>Your snippet is public. It can be accessed by anyone with the link.</div>
		<button class="small button" type="button" onclick={() => (is_public = false)}>
			Mark as private
		</button>
	{:else}
		<div class="info">Your snippet is private. Only you can access it.</div>
		<button class="small button" type="button" onclick={() => (is_public = true)}>
			Mark as public
		</button>
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}
</style>
