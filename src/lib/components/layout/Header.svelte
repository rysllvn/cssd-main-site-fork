<script lang="ts">
	import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
	import logo from '$lib/assets/cssd-logo.jpg';
	import NavigationPopup from './NavigationPopup.svelte';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

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
			<span
				class=" hidden md:block bg-gradient-to-br from-blue-900 to-cyan-700 bg-clip-text text-transparent box-decoration-clone text-3xl"
				>Challenged Sailors San Diego</span
			>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="items-center gap-3 hidden sm:flex">
			<NavigationPopup />
			<a href="https://www.facebook.com/challengedsailors/">
				<iconify-icon icon="logos:facebook" class="text-4xl" />
			</a>
			<a href="https://www.instagram.com/challengedsailors">
				<iconify-icon icon="skill-icons:instagram" class="text-4xl" />
			</a>
		</div>
	</svelte:fragment>
</AppBar>
