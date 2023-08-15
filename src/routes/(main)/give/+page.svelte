<script lang="ts">
	import SponsorshipCloud from '$lib/components/SponsorshipCloud.svelte';
	import groupPhoto from '$lib/assets/images/group_photo.jpg';

	const titles = [
		'Legacy: $50,000',
		'Admiral:  $20,000',
		'Captain: $10,000',
		'First Mate: $5,000',
		'Bosun: $1,000',
		'Crew: up to $500',
		'Friend: Up to $250'
	];
</script>

<header class="flex gap-4 flex-col">
	<h1 class="h1">Give</h1>
	<hr />

	<div class="flex flex-col lg:flex-row-reverse gap-8">
		<div class="lg:w-1/2 flex flex-col justify-around">
			<p class="prose-xl">
				Thank you to all of our donors for their continued support. We could not offer free weekly
				sailing without your generous contributions.
			</p>
			<p class="prose-lg">
				We offer a range of opportunities for engaging with Challenged Sailors San Diego to make a
				difference in the recreational and therapeutic lives of the disabled.
			</p>
		</div>
		<img class="lg:w-1/2 rounded" src={groupPhoto} alt="group of sailors and volunteers" />
	</div>
</header>

<hr />

<section class="flex flex-col lg:flex-row gap-8">
	<div class="lg:w-2/5 flex flex-col items-center justify-around">
		<button class="btn text-2xl variant-filled-secondary w-fit shadow-sm mb-8">Donate Now!</button>
		<ul class="flex flex-col items-center justify-center gap-2">
			{#each titles as title}
				<li class="prose-xl">{title}</li>
			{/each}
		</ul>
	</div>
	<img class="lg:w-3/5" src={groupPhoto} alt="" />
</section>

<SponsorshipCloud />
