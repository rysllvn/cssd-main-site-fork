<script lang="ts">
	import { navigation } from '$lib/navigation';
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';

	const navigationPopup: PopupSettings = {
		event: 'click',
		target: 'navigationPopup',
		placement: 'bottom'
	};
</script>

<div class="hidden md:flex lg:hidden">
	<button class="btn hover:variant-soft-secondary w-fit" use:popup={navigationPopup}>
		<div class="flex items-center gap-2">
			<span class="capitalize">Navigate</span>
		</div>
		<iconify-icon icon="bxs:down-arrow" />
	</button>

	<div class="card w-48 shadow-xl" data-popup="navigationPopup">
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
						<a {href}>
							<iconify-icon {icon} class="mr-4 text-xl" />
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="arrow bg-surface-100-800-token" />
	</div>
</div>
