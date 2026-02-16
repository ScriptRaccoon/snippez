<script lang="ts">
	import { allow_tab_inputs, resize_textarea } from '$lib/client/utilts'
	import FormWrapper from '$lib/components/FormWrapper.svelte'
	import LanguagesDataList from '$lib/components/LanguagesDataList.svelte'
	import PublicContainer from '$lib/components/PublicContainer.svelte'

	let { form } = $props()

	let is_public = $state(false)
</script>

<header>
	<h1>New Snippet</h1>
</header>

<FormWrapper>
	{#snippet children(sending)}
		<div class="form-group">
			<label class="label" for="title">Title</label>
			<input class="input" type="text" name="title" id="title" required />
		</div>

		<div class="form-group">
			<label class="label" for="description">Description (optional)</label>
			<textarea
				class="input"
				name="description"
				{@attach resize_textarea}
				id="description"
			></textarea>
		</div>

		<div class="form-group">
			<label class="label" for="language">Language</label>
			<input
				class="input code"
				type="text"
				name="language"
				id="language"
				required
				list="languages"
			/>
		</div>

		<div class="form-group">
			<label class="label" for="code">Code</label>
			<textarea
				{@attach resize_textarea}
				{@attach allow_tab_inputs}
				class="input code"
				name="code"
				id="code"
				required
			></textarea>
		</div>

		<div class="form-group">
			<input
				type="checkbox"
				name="is_public"
				id="is_public"
				class="sr-only"
				bind:checked={is_public}
			/>

			<PublicContainer bind:is_public />
		</div>

		<div class="actions">
			<button class="button" disabled={sending}>Create Snippet</button>
		</div>
	{/snippet}
</FormWrapper>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<LanguagesDataList />

<style>
	.actions {
		margin-top: 2rem;
	}
</style>
