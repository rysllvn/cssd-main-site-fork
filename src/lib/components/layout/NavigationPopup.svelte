<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const navigationPopup: PopupSettings = {
		event: 'focus-click',
		target: 'navigationPopup',
		placement: 'bottom'
	};

	const navigation = [
		{ href: '/', text: 'Home', icon: 'iconamoon:home-bold' },
		{ href: '/calendar', text: 'Calendar', icon: 'mdi:calendar' },
		{ href: '/volunteer', text: 'Volunteer', icon: 'ph:hand' },
		{ href: '/give', text: 'Give', icon: 'material-symbols:volunteer-activism' },
		{ href: '/about', text: 'About', icon: 'mdi:about' },
		{ href: '/contact', text: 'Contact', icon: 'material-symbols:contact-mail-outline' },
		{ href: '/faq', text: 'FAQ', icon: 'wpf:faq' }
	];
</script>

<button class="btn variant-filled w-48 justify-between" use:popup={navigationPopup}>
	<div class="flex items-center gap-2">
		<iconify-icon icon="ph:compass-fill" class="text-xl" />
		<span class="capitalize">Navigate</span>
	</div>
	<iconify-icon icon="bxs:down-arrow" />
</button>

<div class="card w-48 shadow-xl" data-popup="navigationPopup">
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
