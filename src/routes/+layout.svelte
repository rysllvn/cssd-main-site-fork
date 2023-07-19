<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	import '$lib/styles/theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import 'iconify-icon';

	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		AppRailTile,
		AppShell,
		LightSwitch
	} from '@skeletonlabs/skeleton';

	import logo from '$lib/assets/cssd-logo.jpg';

	let currentTile = 0;
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar class="shadow-lg">
			<svelte:fragment slot="lead">
				<iconify-icon icon="noto-v1:sailboat" class="text-4xl" />
			</svelte:fragment>
			<div class="font-bold text-xl">Challenged Sailors San Diego</div>
			<svelte:fragment slot="trail">
				<button type="button" class="btn variant-filled">Facebook</button>
				<button type="button" class="btn variant-filled">Instagram</button>
				<button type="button" class="btn variant-filled">Twitter</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/calendar">Calendar</a></li>
				<li><a href="/about">Participate</a></li>
				<li><a href="/about">Volunteer</a></li>
				<li><a href="/about">Give</a></li>
				<li><a href="/about">Contact</a></li>
				<li><a href="/about">Resources</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
