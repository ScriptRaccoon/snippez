<script lang="ts">
	import languages from '$lib/client/languages.json'
</script>

<datalist id="languages">
	{#each languages as language}
		<option value={language}></option>
	{/each}
</datalist>
