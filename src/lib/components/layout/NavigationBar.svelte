<script lang="ts">
	import { navigation } from '$lib/navigation';
</script>

<a href="/application" class="shadow btn font-bold 'btn variant-filled-primary w-full">
	Go Sailing!
</a>

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
