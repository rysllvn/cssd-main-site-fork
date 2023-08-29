<script lang="ts">
	import ApplicationForm from '$lib/components/ApplicationForm.svelte';

	import one from '$lib/assets/images/gosailing/one.jpeg?w=800&imagetools';
	import two from '$lib/assets/images/gosailing/two.jpg?w=400&imagetools';
</script>

<header>
	<h1 class="h1">Go Sailing!</h1>
</header>
<hr />
<section class="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
	<div class="flex flex-col justify-between">
		<p class="prose-lg lg:prose-xl">
			Ready to go sailing? Or looking to volunteer? Both?!? Fill out the initial submission below to
			get started and we'll be in touch super soon to talk scheduling!
		</p>
		<p class="prose-lg lg:prose-xl">
			Or simply email your interest to <a class="anchor" href="mailto:info@challengedsailors.org"
				>info@challengedsailors.org</a
			> with your level of interest and we'll respond with a full application packet.
		</p>
	</div>
	<div class="flex flex-col justify-around">
		<img class="shadow grid rounded" src={two} alt="" />
	</div>
</section>
<hr />
<ApplicationForm />
<img class="shadow grid rounded" src={one} alt="" />
