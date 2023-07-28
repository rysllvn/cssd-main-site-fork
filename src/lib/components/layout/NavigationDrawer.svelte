<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	// Navigation Drawer
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
