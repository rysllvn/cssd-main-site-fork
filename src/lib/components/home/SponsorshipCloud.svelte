<script lang="ts">
	// Sponsorship logos
	// https://github.com/vitejs/vite/discussions/12191
	const logos = Object.values(
		import.meta.glob('../../assets/logos/*.{png,jpg,jpeg,PNG,JPEG,svg}', {
			eager: true,
			as: 'url'
		})
	);
</script>

<section class="p-5 card variant-glass-primary mt-24 flex flex-col items-center">
	<h2 class="h2 mb-6">Proudly Sponsored By</h2>
	<hr />
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		{#each logos as logoSrc}
			<div class="flex justify-center items-center">
				<img class="max-h-[12rem] max-w-full rounded-lg" src={logoSrc} alt="" />
			</div>
		{/each}
	</div>
</section>
