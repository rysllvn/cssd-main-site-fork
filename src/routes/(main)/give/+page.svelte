<script lang="ts">
	import SponsorshipCloud from '$lib/components/home/SponsorshipCloud.svelte';

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

	<p class="prose-lg">
		Thank you to all our donors for their continued support. We couldn’t offer free weekly sailing
		without your generous contributions.
	</p>
	<p class="prose-lg">
		We offer a range of opportunities for engaging with Challenged Sailors San Diego to make a
		difference in the recreational and therapeutic lives of the disabled.
	</p>
</header>

<hr />

<button class="btn variant-filled-secondary w-fit shadow-sm">Donate Now!</button>
<ul>
	{#each titles as title}
		<li class="prose-lg">{title}</li>
	{/each}
</ul>

<SponsorshipCloud />
