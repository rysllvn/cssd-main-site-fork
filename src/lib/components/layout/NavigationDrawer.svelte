<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { navigation, resources } from '$lib/navigation';
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer width="w-64">
	<nav class="list-nav p-1">
		<ul class="p-2">
			<li>
				<a href="/">
					<iconify-icon icon="iconamoon:home-bold" class="mr-4 text-xl" />
					Home
				</a>
			</li>
			{#each navigation as { href, text, icon }}
				<li>
					<a {href} on:click={drawerClose}>
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
					<a {href} on:click={drawerClose}>
						<iconify-icon {icon} class="mr-4 text-xl" />
						{text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>
