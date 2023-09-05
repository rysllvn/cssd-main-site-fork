<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { navigation, resources } from '$lib/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	$: classesActive = (href: string) => {
		console.log(href);
		console.log($page.url.pathname);
		return `/${href}` === $page.url.pathname
			? '!bg-primary-400 !text-primary-900'
			: '!bg-surface-100 !text-primary-900';
	};

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer width="w-64">
	<nav class="list-nav p-1">
		<ul class="p-2">
			<li>
				<a href="{base}/" on:click={drawerClose} class={classesActive('')}>
					<iconify-icon icon="iconamoon:home-bold" class="mr-4 text-xl" />
					Home
				</a>
			</li>
			{#each navigation as { href, text, icon }}
				<li>
					<a href="{base}/{href}" on:click={drawerClose} class={classesActive(href)}>
						<iconify-icon {icon} class="mr-4 text-xl" />
						{text}
					</a>
				</li>
			{/each}
		</ul>
		<hr />
		<ul class="p-2">
			{#each resources as { href, text, icon }}
				<li>
					<a href="{base}/{href}" on:click={drawerClose} class={classesActive(href)}>
						<iconify-icon {icon} class="mr-4 text-xl" />
						{text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>
