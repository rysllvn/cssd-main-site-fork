<script lang="ts">
	import logo from '$lib/assets/cssd-logo.jpg';
	import frontView from '$lib/assets/front-view.png';
</script>

<header
	id="header"
	class="w-full px-4 py-10 lg:py-40 flex flex-col md:flex-row items-center gap-10"
>
	<img class="w-64 md:w-96 rounded-lg" src={logo} alt="Challenged Sailors San Diego Logo" />
	<div class="card card-hover flex flex-col gap-4 items-center variant-glass-primary p-4 shadow-lg">
		<h1 class="h1">Welcome!</h1>
		<hr />
		<p class="text-xl italic">
			<strong>Our Mission</strong> is to provide therapeutic and recreational adaptive sailing opportunities
			for people with disabilities to enhance their dignity, well-being, and independence.
		</p>
		<a class="w-fit btn variant-filled-primary font-bold text-2xl" href="/go-sailing">Go Sailing!</a
		>
	</div>
</header>

<main class="card px-4 py-28 flex flex-col items-center gap-8">
	<div class="flex flex-col-reverse md:flex-row items-center gap-10">
		<iframe
			width="800"
			height="450"
			src="https://www.youtube.com/embed/4nR5ijaMZWo"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>

	<section class="card p-3 w-fit variant-glass-secondary flex flex-col">
		<h2 class="h2 mb-2">Get Involved</h2>
		<hr />
		<p class="text">Volunteers and donations are welcome and appreciated</p>
		<div>
			<a class="w-fit btn variant-filled-secondary" href="/volunteer">Volunteer</a>
			<a class="w-fit btn variant-filled-tertiary" href="/give">Give</a>
		</div>
	</section>
</main>

<style>
	#header {
		background-image: url($lib/assets/home-page.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	main {
		background-image: url($lib/assets/all-boats.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
