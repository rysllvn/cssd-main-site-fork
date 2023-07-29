<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const navigationPopup: PopupSettings = {
		event: 'focus-click',
		target: 'navigationPopup',
		placement: 'bottom'
	};

	const navigation = [
		{ href: '/go-sailing', text: 'Go Sailing!' },
		{ href: '/', text: 'Home' },
		{ href: '/calendar', text: 'Calendar' },
		{ href: '/volunteer', text: 'Volunteer' },
		{ href: '/give', text: 'Give' },
		{ href: '/about', text: 'About' },
		{ href: '/contact', text: 'Contact' },
		{ href: '/faq', text: 'FAQ' }
	];
</script>

<button class="btn variant-filled w-48 justify-between" use:popup={navigationPopup}>
	<span class="capitalize">Explore</span>
	<iconify-icon icon="bxs:down-arrow" />
</button>

<div class="card w-48 shadow-xl py-2" data-popup="navigationPopup">
	<nav class="list-nav p-1">
		<ul>
			{#each navigation as { href, text }}
				<li>
					<a {href}>{text}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="arrow bg-surface-100-800-token" />
</div>
