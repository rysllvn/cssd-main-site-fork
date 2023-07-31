<script lang="ts">
	const images = Object.values(
		import.meta.glob('../../assets/images/*.{png,jpg,jpeg,PNG,JPEG,svg}', {
			eager: true,
			as: 'url'
		})
	);
	import Image from '../Image.svelte';
</script>

<section class="flex flex-col items-center card variant-glass-primary mt-12 p-4">
	<h2 class="h2 mb-5">Testimonials</h2>
	<div class="grid grid-cols-2 md:grid-cols-4 gap-2">
		{#each { length: 4 } as _, i}
			{@const imagesSlice = images.slice(i * 3, i * 3 + 3)}
			<div class="grid gap-1">
				{#each imagesSlice as src}
					<div>
						<Image {src} />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</section>
