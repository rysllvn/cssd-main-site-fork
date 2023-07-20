<script lang="ts">
	import logo from '$lib/assets/cssd-logo.jpg';
</script>

<main class="container mx-auto p-8 space-y-8 h-full">
	<div class="flex gap-1 flex-col lg:flex-row">
		<div class="w-1/2">
			<img src={logo} alt="Challenged Sailors San Diego Logo" class="rounded-lg" />
		</div>
		<section class="card p-4">
			<h2 class="h2 italic">Our Mission</h2>
			<p class="text-xl">
				Challenged Sailors San Diego provides therapeutic and recreational adaptive sailing
				opportunities for people with disabilities to enhance their dignity, well-being, and
				independence.
			</p>
		</section>
	</div>
	<section class="flex flex-col sm:flex-row gap-4 justify-center items-center">
		<a class="w-fit btn variant-filled-primary" href="/participate">Participate</a>
		<a class="w-fit btn variant-filled-secondary" href="/volunteer">Volunteer</a>
		<a class="w-fit btn variant-filled-tertiary" href="/give">Give</a>
	</section>
</main>

<style>
	main {
		background-image: url($lib/assets/all-boats.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
