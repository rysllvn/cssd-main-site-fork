<script lang="ts">
	// images
	import topPicture from '$lib/assets/images/IMG_3704.jpg';
	import volunteerPicture from '$lib/assets/images/IMG_3701.jpg';

	// Components
	import Image from '$lib/components/Image.svelte';
	import Testimonials from '$lib/components/home/Testimonials.svelte';
	import SponsorshipCloud from '$lib/components/SponsorshipCloud.svelte';
	import ButtonApplication from '$lib/components/ButtonApplication.svelte';
</script>

<div
	id="background"
	class="w-full h-full bg-gradient-to-r from-primary-200 to-secondary-300 text-white"
>
	<div class="container w-full h-full max-w-screen-xl mx-auto mb-10 sm:py-10">
		<header
			id="header"
			class="mb-10 variant-glass-primary card w-full px-4 py-6 flex flex-col md:flex-row items-center gap-10"
		>
			<Image classes="max-h-[16rem] max-w-full rounded-lg" src={topPicture} alt="" />
			<div class="flex flex-col gap-4 items-center">
				<h1 class="h1">Welcome!</h1>
				<hr />
				<h2 class="h3 italic">
					<strong>Challenged Sailors San Diego</strong> provides therapeutic and recreational adaptive
					sailing opportunities for people with disabilities to enhance their dignity, well-being, and
					independence.
				</h2>
				<ButtonApplication large={true} />
			</div>
		</header>

		<section class="flex flex-col lg:flex-row items-center gap-4 justify-between">
			<div class="card hidden md:flex variant-glass-primary p-2">
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
			<div class="flex flex-col items-center gap-2">
				<section class="card p-3 w-fit variant-glass-secondary flex flex-col">
					<h2 class="h2 mb-2">Get Involved</h2>
					<hr />
					<blockquote class="text-white blockquote m-2 text-lg">
						“a sailboat is not just a mast or sails or a rudder; a sailboat is freedom.” - Captain
						Jack Sparrow
					</blockquote>
					<div>
						<a class="w-fit btn variant-filled-primary" href="/volunteer">Volunteer</a>
						<a class="w-fit btn variant-filled-secondary" href="/give">Give</a>
					</div>
				</section>
				<Image src={volunteerPicture} classes="max-h-[14rem] max-w-full" />
			</div>
		</section>

		<Testimonials />
		<SponsorshipCloud />
	</div>
</div>

<style>
	#background {
		background-image: url($lib/assets/images/home_background.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
