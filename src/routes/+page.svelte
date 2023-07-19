<script lang="ts">
	import logo from '$lib/assets/cssd-logo.jpg';
	import groupSail from '$lib/assets/all-boats.png';
</script>

<main class="container mx-auto p-8 space-y-8 h-full">
	<div class="flex gap-1">
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
	<section>
		<a class="btn variant-filled-primary" href="/donate">Donate</a>
		<a class="btn variant-filled-secondary" href="/participate">Participate</a>
		<a class="btn variant-filled-tertiary" href="/volunteer">Volunteer</a>
	</section>
</main>

<style>
	main {
		background-image: url($lib/assets/all-boats.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
