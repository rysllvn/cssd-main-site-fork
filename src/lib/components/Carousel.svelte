<script lang="ts">
	import { sponsors } from '$lib/assets/images/sponsors';
	import { onMount } from 'svelte';

	let elemCarousel: HTMLDivElement;

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	onMount(() => {
		setInterval(carouselRight, 1200);
	});
</script>

<div class="w-[280px] card p-4 grid grid-cols-[auto_1fr_auto] gap-1 justify-center items-center">
	<div
		bind:this={elemCarousel}
		class="gap-4 snap-x snap-mandatory scroll-smooth flex overflow-x-auto items-center"
	>
		{#each sponsors as { src, alt, href }}
			<img class="h-full snap-center rounded-container-token" {src} {alt} loading="lazy" />
		{/each}
	</div>
</div>
