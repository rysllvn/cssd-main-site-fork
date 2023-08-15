<script lang="ts">
	import { AppBar, drawerStore } from '@skeletonlabs/skeleton';

	// custom components
	import ResourcesPopup from './ResourcesPopup.svelte';
	import NavigationBar from './NavigationBar.svelte';
	import NavigationPopup from './NavigationPopup.svelte';

	// assets
	import logo from '$lib/assets/images/logos/CSSD_EEM_Logo2.jpg';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<AppBar
	class="shadow-md py-1"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<button class="md:hidden btn btn-sm" on:click={drawerOpen}>
			<span>
				<iconify-icon icon="ci:hamburger-lg" class="text-4xl" />
			</span>
		</button>
		<a class="flex items-center gap-2" href="/">
			<img class="rounded-lg w-16" src={logo} alt="Challenged Sailors" />
			<span class=" hidden md:block text-2xl">Challenged Sailors San Diego</span>
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<div class="items-center gap-3 flex">
			<NavigationBar />
			<NavigationPopup />
			<ResourcesPopup />
		</div>
	</svelte:fragment>
</AppBar>
