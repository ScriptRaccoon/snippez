<script lang="ts">
	import { enhance } from '$app/forms'
	import type { Snippet } from 'svelte'
	import { is_loading } from './LoadingBar.svelte'

	let sending = $state(false)

	type Props = {
		action?: string
		children: Snippet<[boolean]>
	}

	let { action, children }: Props = $props()

	$effect(() => {
		is_loading.value = sending
	})
</script>

<form
	{action}
	method="POST"
	use:enhance={() => {
		sending = true
		return async ({ update }) => {
			await update()
			sending = false
		}
	}}
>
	{@render children(sending)}
</form>
