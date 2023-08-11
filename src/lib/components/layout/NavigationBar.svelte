<script lang="ts">
	import { navigation } from '$lib/navigation';

	import ButtonApplication from '../ButtonApplication.svelte';
</script>

<ButtonApplication />
<nav class="hidden lg:flex">
	<ul class="flex items-center justify-between gap-7">
		<li />
		{#each navigation as { href, text, icon }}
			<li>
				<a class="anchor" {href}>{text}</a>
			</li>
		{/each}
	</ul>
</nav>
