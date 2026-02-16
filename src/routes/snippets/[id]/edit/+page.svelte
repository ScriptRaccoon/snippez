<script lang="ts">
	import { allow_tab_inputs, resize_textarea, scroll_here } from '$lib/client/utilts'
	import FormWrapper from '$lib/components/FormWrapper.svelte'
	import LanguagesDataList from '$lib/components/LanguagesDataList.svelte'
	import PublicContainer from '$lib/components/PublicContainer.svelte'

	let { data, form } = $props()

	let confirm_deletion = $state(false)

	let is_public = $derived(Boolean(data.snippet.public))
</script>

<header>
	<h1>Edit Snippet</h1>
</header>

<FormWrapper action="?/update">
	{#snippet children(sending)}
		<div class="form-group">
			<label class="label" for="title">Title</label>
			<input
				class="input"
				type="text"
				name="title"
				id="title"
				required
				value={data.snippet.title}
			/>
		</div>

		<div class="form-group">
			<label class="label" for="description">Description (optional)</label>
			<textarea
				class="input"
				name="description"
				id="description"
				{@attach resize_textarea}>{data.snippet.description}</textarea
			>
		</div>

		<div class="form-group">
			<label class="label" for="language">Language</label>
			<input
				class="input code"
				type="text"
				name="language"
				id="language"
				required
				value={data.snippet.language}
				list="languages"
			/>
		</div>

		<div class="form-group">
			<label class="label" for="content">Code</label>
			<textarea
				class="input code"
				name="code"
				id="code"
				required
				{@attach resize_textarea}
				{@attach allow_tab_inputs}>{data.snippet.code}</textarea
			>
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

		<div class="actions main">
			<button class="button" disabled={sending}>Update snippet</button>

			<button
				class="button danger"
				type="button"
				onclick={() => {
					confirm_deletion = true
				}}
				disabled={confirm_deletion || sending}
			>
				Delete snippet
			</button>
		</div>
	{/snippet}
</FormWrapper>

{#if confirm_deletion}
	<FormWrapper action="?/delete">
		{#snippet children(sending)}
			<div class="delete-form" {@attach scroll_here}>
				<p>Are you sure that you want to delete this snippet?</p>

				<div class="actions">
					<button class="button danger" disabled={sending}>Yes, delete snippet</button>

					<button
						type="button"
						class="button"
						onclick={() => {
							confirm_deletion = false
						}}
					>
						Cancel
					</button>
				</div>
			</div>
		{/snippet}
	</FormWrapper>
{/if}

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<LanguagesDataList />

<style>
	.actions {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	.actions.main {
		margin-top: 2rem;
	}

	.delete-form {
		margin-top: 2rem;
		/* scroll hack: */
		padding-bottom: 2rem;
		margin-bottom: -2rem;
	}
</style>
