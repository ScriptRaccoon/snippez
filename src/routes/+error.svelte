<script lang="ts">
	import { page } from '$app/state'
</script>

<header>
	<h1>{page.status}</h1>
</header>

<p>{page.error?.message}</p>

<p>
	<a href="/">Home</a>
</p>
