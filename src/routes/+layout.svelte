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

	// Skeleton Components
	import { AppBar, AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import logo from '$lib/assets/cssd-logo.jpg';

	const navigation = [
		{ href: '/', text: 'Home' },
		{ href: '/go-sailing', text: 'Go Sailing!' },
		{ href: '/calendar', text: 'Calendar' },
		{ href: '/volunteer', text: 'Volunteer' },
		{ href: '/give', text: 'Give' },
		{ href: '/about', text: 'About' },
		{ href: '/contact', text: 'Contact' },
		{ href: '/faq', text: 'FAQ' }
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
				<a class="flex items-center gap-2" href="/">
					<img class="rounded-lg w-24" src={logo} alt="Challenged Sailors San Diego Logo" />
					<!-- <div class="hidden md:block text-xl">Challenged Sailors San Diego</div> -->
					<span
						class=" hidden md:block bg-gradient-to-br from-blue-900 to-cyan-700 bg-clip-text text-transparent box-decoration-clone text-3xl"
						>Challenged Sailors San Diego</span
					>
				</a>
			</svelte:fragment>
			<a class="w-fit btn variant-filled-primary font-bold text-2xl" href="/go-sailing"
				>Go Sailing!</a
			>
			<svelte:fragment slot="trail">
				<div class="items-center gap-3 hidden sm:flex">
					<a href="https://www.facebook.com/challengedsailors/">
						<iconify-icon icon="logos:facebook" class="text-4xl" />
					</a>
					<a href="https://www.instagram.com/challengedsailors">
						<iconify-icon icon="skill-icons:instagram" class="text-4xl" />
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<!-- <nav class="list-nav">
			<ul>
				{#each navigation as { href, text }}
					<li>
						<a {href}>{text}</a>
					</li>
				{/each}
			</ul>
		</nav> -->
		<!-- --- -->
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (footer) -->
	<svelte:fragment slot="pageFooter">
		<footer>
			<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div class="sm:flex sm:items-center sm:justify-between">
					<img class="w-48 md:w-64 rounded-lg" src={logo} alt="Challenged Sailors San Diego Logo" />
					<ul
						class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
					>
						<li>
							<a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
						</li>
						<li>
							<a href="/contact" class="hover:underline">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
