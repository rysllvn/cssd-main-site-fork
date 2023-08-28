<script lang="ts">
	import SponsorshipCloud from '$lib/components/SponsorshipCloud.svelte';
	import one from '$lib/assets/images/give/one.jpg?w=500&imagetools';
	import two from '$lib/assets/images/give/two.jpg?w=400&imagetools';
	import PayPal from '$lib/components/PayPal.svelte';

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
</header>
<hr />

<section class="flex flex-col lg:flex-row gap-8">
	<div class="lg:w-3/5 flex flex-col items-center gap-2">
		<div class="card variant-filled-surface p-2 shadow">
			<PayPal />
		</div>
		<ul class="flex flex-col items-center justify-center gap-2">
			{#each titles as title}
				<li class="prose-xl">{title}</li>
			{/each}
		</ul>
	</div>
	<img
		class="lg:w-2/5 rounded shadow-sm"
		src={one}
		alt="Peter accepting Channel Cruising Club donation"
	/>
</section>
<hr />
<section class="flex flex-col lg:flex-row-reverse gap-8">
	<div class="lg:w-3/5 flex flex-col justify-around">
		<p class="prose-xl">
			Thank you to all of our donors for their continued support. We could not offer free weekly
			sailing without your generous contributions.
		</p>
		<p class="prose-xl">
			We offer a range of opportunities for engaging with Challenged Sailors San Diego to make a
			difference in the recreational and therapeutic lives of the disabled.
		</p>
	</div>
	<img class="lg:w-2/5 rounded shadow-sm" src={two} alt="Group posing after sail with donation" />
</section>

<hr />
<SponsorshipCloud />
