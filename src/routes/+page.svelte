<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	// sponsorship images
	// https://github.com/vitejs/vite/discussions/12191
	const logos = Object.values(
		import.meta.glob('../lib/assets/logos/*.{png,jpg,jpeg,PNG,JPEG,svg}', {
			eager: true,
			as: 'url'
		})
	);
	// images
	const images = Object.values(
		import.meta.glob('../lib/assets/images/*.{png,jpg,jpeg,PNG,JPEG,svg}', {
			eager: true,
			as: 'url'
		})
	);
	const images1 = images.slice(0, 3);
	const images2 = images.slice(3, 6);
	const images3 = images.slice(6, 9);
	const images4 = images.slice(9, 12);

	import topPicture from '$lib/assets/images/IMG_3704.jpg';
	import volunteerPicture from '$lib/assets/images/IMG_3701.jpg';
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
			<img class="max-h-[16rem] max-w-full rounded-lg" src={topPicture} alt="" loading="lazy" />
			<div class="flex flex-col gap-4 items-center">
				<h1 class="h1">Welcome!</h1>
				<hr />
				<h2 class="h3 italic">
					<strong>Challenged Sailors San Diego</strong> provides therapeutic and recreational adaptive
					sailing opportunities for people with disabilities to enhance their dignity, well-being, and
					independence.
				</h2>
				<a class="w-fit btn variant-filled-tertiary font-bold text-4xl" href="/go-sailing">
					<iconify-icon icon="ri:sailboat-line" class="mr-2 text-4xl" />
					Go Sailing!
					<iconify-icon icon="ri:sailboat-line" class="mr-2 text-4xl" />
				</a>
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
				<img
					loading="lazy"
					src={volunteerPicture}
					alt=""
					class="max-h-[14rem] max-w-full rounded-lg"
				/>
			</div>
		</section>

		<section class="flex flex-col items-center card variant-glass-primary mt-12 p-4">
			<h2 class="h2 mb-5">Testimonials</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-2">
				<div class="grid gap-1">
					{#each images1 as src}
						<div>
							<img
								class="card card-hover h-auto max-w-full rounded-lg cursor-pointer"
								{src}
								alt=""
								loading="lazy"
								on:click={() => {
									modalStore.trigger({
										type: 'alert',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
								on:keypress={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'John Doe',
										body: 'Lorem ipsum dolor',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
							/>
						</div>
					{/each}
				</div>
				<div class="grid gap-1">
					{#each images2 as src}
						<div>
							<img
								class="card card-hover h-auto max-w-full rounded-lg cursor-pointer"
								{src}
								alt=""
								loading="lazy"
								on:click={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'John Doe',
										body: 'Lorem ipsum dolor',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
								on:keypress={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'John Doe',
										body: 'Lorem ipsum dolor',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
							/>
						</div>
					{/each}
				</div>
				<div class="grid gap-1">
					{#each images3 as src}
						<div>
							<img
								class="card card-hover h-auto max-w-full rounded-lg cursor-pointer"
								{src}
								alt=""
								loading="lazy"
								on:click={() => {
									modalStore.trigger({
										type: 'alert',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
								on:keypress={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'John Doe',
										body: 'Lorem ipsum dolor',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
							/>
						</div>
					{/each}
				</div>
				<div class="grid gap-1">
					{#each images4 as src}
						<div>
							<img
								class="card card-hover h-auto max-w-full rounded-lg cursor-pointer"
								{src}
								alt=""
								loading="lazy"
								on:click={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'John Doe',
										body: 'Lorem ipsum dolor',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
								on:keypress={() => {
									modalStore.trigger({
										type: 'alert',
										title: 'John Doe',
										body: 'Lorem ipsum dolor',
										buttonTextCancel: 'Close',
										image: src
									});
								}}
							/>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="p-5 card variant-glass-primary mt-24 flex flex-col items-center">
			<h2 class="h2 mb-6">Proudly Sponsored By</h2>
			<hr />
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
				{#each logos as logoSrc}
					<div class="flex justify-center items-center">
						<img class="max-h-[12rem] max-w-full rounded-lg" src={logoSrc} alt="" />
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>

<style>
	#background {
		background-image: url($lib/assets/images/home_background.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
