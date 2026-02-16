<script lang="ts">
	import { page } from '$app/state'
	import { User, CirclePlus, LayoutList } from 'lucide-svelte'
</script>

{#if page.data.user}
	<nav>
		<ul>
			<li>
				<a
					class="icon-link"
					href="/dashboard"
					aria-label="dashboard"
					aria-current={page.url.pathname === '/dashboard'}
				>
					<LayoutList size={22} />
				</a>
			</li>
			<li>
				<a
					class="icon-link"
					href="/snippets/new"
					aria-label="new snippet"
					aria-current={page.url.pathname === '/snippets/new'}
				>
					<CirclePlus size={26} />
				</a>
			</li>
			<li class="account-link">
				<a
					href="/account"
					aria-label="account"
					aria-current={page.url.pathname === '/account'}
				>
					<img src={page.data.user.avatar_url} alt="avatar" class="avatar" />
				</a>
			</li>
		</ul>
	</nav>
{/if}

<style>
	ul {
		list-style-type: none;
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	nav {
		padding-top: 1rem;
	}

	.icon-link {
		width: 2.25rem;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: var(--button-color);
	}

	.account-link {
		margin-left: auto;
	}

	.avatar {
		border-radius: 50%;
		width: 2rem;
	}
</style>
