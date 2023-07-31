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
				<a class="bg-primary-800 text-white" href="/go-sailing">
					<iconify-icon icon="ri:sailboat-fill" class="mr-2 text-xl" />
					Go Sailing!
				</a>
			</li>
		</ul>
		<hr />
		<ul class="p-2">
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
