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
			Ready to go sailing? Fill out the application below to help us out and we'll be in touch soon.
		</p>
		<img class="grid rounded" src={one} alt="" />
	</div>
	<img class="grid rounded" src={two} alt="" />
</section>
<hr />
<ApplicationForm />
