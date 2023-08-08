<script lang="ts">
	import Hero from './Hero.svelte';
	import ButtonApplication from '../ButtonApplication.svelte';
	import Image from '../Image.svelte';

	import groupPicture from '$lib/assets/images/group_photo.jpg';
	import top from '$lib/assets/images/home_background.jpg';

	import SponsorshipCloud from './SponsorshipCloud.svelte';
</script>

<Hero src={groupPicture}>
	<div class="card variant-glass-primary p-4">
		<a class="w-fit btn variant-filled-primary text-xl" href="/volunteer">Volunteer</a>
		<a class="w-fit btn variant-filled-secondary text-xl" href="/give">Donate</a>
	</div>
	<header
		id="header"
		class="mb-10 variant-glass-primary card w-full px-4 py-6 flex flex-col md:flex-row items-center gap-10"
	>
		<div class="flex flex-col gap-4 items-center text-white">
			<h1 class="h1">Welcome!</h1>
			<hr />
			<h2 class="h3 italic">
				We provide therapeutic and recreational adaptive sailing opportunities for people with
				disabilities.
			</h2>
			<div class="h3">
				We go sailing Fridays and Saturdays. Click here to

				<ButtonApplication large={true} />
			</div>
		</div>
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
	</header>
</Hero>

<Hero src={top}>
	<SponsorshipCloud />
</Hero>
