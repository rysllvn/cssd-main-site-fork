<script lang="ts">
	import logo from '$lib/assets/cssd-logo.jpg';
	// sponsorship images
	// https://github.com/vitejs/vite/discussions/12191
	const images = Object.values(
		import.meta.glob('../lib/assets/logos/*.{png,jpg,jpeg,PNG,JPEG,svg}', {
			eager: true,
			as: 'url'
		})
	);
</script>

<div id="background" class="w-full h-full">
	<div class="container w-full h-full max-w-screen-xl mx-auto mb-10 sm:py-10">
		<header
			id="header"
			class="mb-10 variant-glass-primary card card-hover w-full px-4 py-6 flex flex-col md:flex-row items-center gap-10"
		>
			<img class="w-64 md:w-96 rounded-lg" src={logo} alt="Challenged Sailors San Diego Logo" />
			<div class="flex flex-col gap-4 items-center">
				<h1 class="h1">Welcome!</h1>
				<hr />
				<h2 class="h3 italic">
					<strong>Our Mission</strong> is to provide therapeutic and recreational adaptive sailing opportunities
					for people with disabilities to enhance their dignity, well-being, and independence.
				</h2>
				<a class="w-fit btn variant-filled-tertiary font-bold text-4xl" href="/go-sailing"
					>Go Sailing!</a
				>
			</div>
		</header>

		<section class="px-4 flex flex-col lg:flex-row items-center gap-4 justify-between">
			<div class="card card-hover hidden md:flex variant-glass-primary p-2">
				<iframe
					style="border-radius: 6px;"
					width="800"
					height="450"
					src="https://www.youtube.com/embed/4nR5ijaMZWo"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>

			<div class="card card-hover flex md:hidden variant-glass-primary p-2">
				<iframe
					style="border-radius: 6px;"
					width="400"
					height="225"
					src="https://www.youtube.com/embed/4nR5ijaMZWo"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
			<section class="card card-hover p-3 w-fit variant-glass-secondary flex flex-col text-white">
				<h2 class="h2 mb-2">Get Involved</h2>
				<hr />
				<blockquote class="blockquote m-2 text-lg text-white">
					“a sailboat is not just a mast or sails or a rudder; a sailboat is freedom.” - Captain
					Jack Sparrow
				</blockquote>
				<div>
					<a class="w-fit btn variant-filled-primary" href="/volunteer">Volunteer</a>
					<a class="w-fit btn variant-filled-secondary" href="/give">Give</a>
				</div>
			</section>
		</section>
		<section class="p-5 card variant-glass-primary mt-36 flex flex-col items-center">
			<h2 class="h2 mb-6">Proudly Sponsored By</h2>
			<hr />
			<section class="grid grid-cols-2 md:grid-cols-3 gap-4">
				{#each images as image}
					<div class="flex justify-center items-center">
						<img class="max-h-[12rem] max-w-full rounded-lg" src={image} alt="" />
					</div>
				{/each}
				<section />
			</section>
		</section>
	</div>
</div>

<style>
	#background {
		background-image: url($lib/assets/all-boats.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
