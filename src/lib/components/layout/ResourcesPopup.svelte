<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const resourcesPopup: PopupSettings = {
		event: 'click',
		target: 'resourcesPopup',
		placement: 'bottom'
	};

	import { resources } from '$lib/navigation';
</script>

<button class="btn w-fit hover:variant-soft-secondary" use:popup={resourcesPopup}>
	<div class="flex items-center gap-2">
		<span class="capitalize">Resources</span>
	</div>
	<iconify-icon icon="bxs:down-arrow" />
</button>

<div class="card w-48 shadow-xl" data-popup="resourcesPopup">
	<nav class="list-nav p-1">
		<ul class="p-2">
			{#each resources as { href, text, icon }}
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
