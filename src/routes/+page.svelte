<script lang="ts">
	import { browser } from '$app/environment';
	import logo from '$lib/assets/cssd-logo.jpg';
</script>

<div class="flex gap-1 flex-col sm:flex-row items-center">
	<div class="w-1/2">
		<img src={logo} alt="Challenged Sailors San Diego Logo" class="rounded-lg" />
	</div>

	<header id="header" class="card card-hover w-fit p-4 flex flex-col items-center gap-2">
		<h1 class="h1">Welcome!</h1>
		<p class="card italic text-xl w-fit p-2">
			“... A sailboat is not just a mast or sails or a rudder; a sailboat is <strong class="bold"
				>freedom</strong
			>” - Captain Jack Sparrow
		</p>
		<a class="w-fit btn variant-filled-primary font-bold text-2xl" href="/go-sailing">Go Sailing!</a
		>
	</header>

	<section class="flex flex-col sm:flex-row gap-4 justify-center items-center" />
</div>

<section class="card p-4 flex flex-col lg:flex-row">
	<div class="flex flex-col gap-4">
		<h2 class="h2 italic">Our Mission</h2>
		<hr />
		<p class="text-xl">
			Challenged Sailors San Diego provides therapeutic and recreational adaptive sailing
			opportunities for people with disabilities to enhance their dignity, well-being, and
			independence.
		</p>
	</div>
	<div class="card w-fit p-2">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/4nR5ijaMZWo"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section class="card p-2 w-fit">
	<h2 class="h2 mb-2">Get Involved</h2>
	<hr />
	<p>Volunteers and donations are welcome and appreciated</p>
	<div>
		<a class="w-fit btn variant-filled-secondary" href="/volunteer">Volunteer</a>
		<a class="w-fit btn variant-filled-tertiary" href="/give">Give</a>
	</div>
</section>

<style>
	#header {
		background-image: url($lib/assets/all-boats.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
