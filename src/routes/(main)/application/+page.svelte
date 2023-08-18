<script lang="ts">
	import ApplicationForm from '$lib/components/ApplicationForm.svelte';

	import one from '$lib/assets/images/application/one.jpeg';
	import two from '$lib/assets/images/application/two.jpg';
</script>

<header>
	<h1 class="h1">Go Sailing!</h1>
</header>
<hr />
<section class="grid grid-cols-1 md:grid-cols-2 gap-8">
	<div class="flex flex-col justify-between">
		<p class="prose-lg lg:prose-xl">
			Ready to go sailing? Or looking to volunteer? Both?!? Fill out the initial submission below to
			get started and we’ll be in touch super soon to talk scheduling!
		</p>
		<img class="grid rounded" src={two} alt="" />
	</div>
	<div class="flex flex-col justify-around">
		<img class="grid rounded" src={one} alt="" />
		<p class="prose-lg lg:prose-xl">
			Or simply email your interest to <a class="anchor" href="mailto:info@challengedsailors.org"
				>info@challengedsailors.org</a
			> with your level of interest and we'll respond with a full application packet.
		</p>
	</div>
</section>
<hr />
<ApplicationForm />
