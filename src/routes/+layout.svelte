<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// import '$lib/styles/theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	// Skeleton Components
	import { AppShell, Modal, type ModalComponent } from '@skeletonlabs/skeleton';

	// Floating UI
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// icons https://iconify.design/
	import 'iconify-icon';

	// Project Components
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import NavigationDrawer from '$lib/components/layout/NavigationDrawer.svelte';
</script>

<NavigationDrawer />
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 md:w-48 md:p-4">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
