<script lang="ts">
	import { navigating } from '$app/state'
	import { fade } from 'svelte/transition'
</script>

{#if navigating.to}
	<div transition:fade={{ duration: 180 }}></div>
{/if}

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		height: 2px;
		background-color: var(--accent-color);
		animation: grow 4s ease-out forwards;
	}

	@keyframes grow {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
