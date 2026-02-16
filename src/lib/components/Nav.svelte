<script lang="ts">
	import { page } from '$app/state'
	import { User, CirclePlus, LayoutList } from 'lucide-svelte'
</script>

<nav>
	<ul>
		<li>
			<a
				href="/dashboard"
				aria-label="dashboard"
				aria-current={page.url.pathname === '/dashboard'}
			>
				<LayoutList size={22} />
			</a>
		</li>
		<li>
			<a
				href="/snippets/new"
				aria-label="new snippet"
				aria-current={page.url.pathname === '/snippets/new'}
			>
				<CirclePlus size={22} />
			</a>
		</li>
		<li>
			<a
				href="/account"
				aria-label="account"
				aria-current={page.url.pathname === '/account'}
			>
				<User size={22} />
			</a>
		</li>
	</ul>
</nav>

<style>
	ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	nav {
		padding-top: 1rem;
	}

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		border: 1px solid var(--outline-color);
		padding: 0.4rem 0.75rem;
		border-radius: 0.5rem;
		background-color: var(--card-color);

		&[aria-current='true'] {
			border-color: var(--focus-outline-color);
		}
	}
</style>
