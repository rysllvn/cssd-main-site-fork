<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	import '$lib/styles/theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	// https://iconify.design/
	import 'iconify-icon';

	import { AppBar, AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';

	const navigation = [
		{ href: '/', text: 'Home' },
		{ href: '/calendar', text: 'Calendar' },
		{ href: '/participate', text: 'Participate' },
		{ href: '/volunteer', text: 'Volunteer' },
		{ href: 'give', text: 'Give' },
		{ href: '/about', text: 'About' },
		{ href: '/contact', text: 'Contact' }
	];

	function drawerOpen(): void {
		drawerStore.open({});
	}
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer>
	<nav class="list-nav">
		<ul class="p-10">
			{#each navigation as { href, text }}
				<li on:click={drawerClose} on:keyup={drawerClose}>
					<a {href}>{text}</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 md:w-48 md:p-4">
	<svelte:fragment slot="header">
		<AppBar class="shadow-lg">
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<iconify-icon icon="noto-v1:sailboat" class="text-4xl" />
			</svelte:fragment>
			<div class="text-xl">Challenged Sailors San Diego</div>
			<svelte:fragment slot="trail">
				<div class="items-center gap-2 hidden sm:block">
					<iconify-icon icon="logos:facebook" class="text-4xl" />
					<iconify-icon icon="skill-icons:instagram" class="text-4xl" />
					<iconify-icon icon="logos:twitter" class="text-4xl" />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				{#each navigation as { href, text }}
					<li>
						<a {href}>{text}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">footer - 2023</svelte:fragment>
	<!-- (footer) -->
</AppShell>
