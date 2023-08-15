<script lang="ts">
	import { sponsors } from '$lib/assets/images/sponsors';
</script>

<section class="p-5 card variant-glass-primary mt-24 flex flex-col items-center">
	<h2 class="h2 mb-6">Proudly Sponsored By</h2>
	<hr />
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		{#each sponsors as { src, alt, href }}
			<div class="flex justify-center items-center">
				<a {href} target="_blank">
					<img class="max-h-[12rem] max-w-full rounded-lg" {src} {alt} />
				</a>
			</div>
		{/each}
	</div>
</section>
