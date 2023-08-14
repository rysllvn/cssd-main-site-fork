<script lang="ts">
	import BeginJourney from '$lib/components/BeginJourney.svelte';

	import dockSupportImg from '$lib/assets/images/IMG_3701.jpg';
	import companionImage from '$lib/assets/images/IMG_4296.jpg';
	import groupPicture from '$lib/assets/images/group_photo.jpg';

	const roles = [
		{
			title: 'Companion sailor',
			description:
				'Seeking experienced sailors who can ride along with our disabled sailors to make sure everyone has a smooth ride and enjoyable time on the water.',
			src: companionImage
		},
		{
			title: 'Dock support',
			description:
				'Seeking abled bodied individuals to help transport sailors to the docks, prepare the boats for launch and land our sailors safely when they return.',
			src: dockSupportImg
		}
	];
</script>

<header>
	<h1 class="h1 mb-7">Volunteer</h1>
	<hr />

	<div class="flex flex-col md:flex-row items-start pt-2">
		<div class="flex flex-col md:flex-row gap-2 lg:w-1/2">
			<div class="flex flex-col gap-4">
				<p class="prose-lg">
					Our volunteers are the lifeblood or our organization. Each week we rely on a myriad of
					volunteers to help with companion sailing, dock support and coordination. It's a true team
					effort.
				</p>
				<BeginJourney />
				<p class="prose-lg">
					Become a volunteer today and make a life changing impact on someone who otherwise wouldn't
					have the chance to belong.
				</p>
				<p class="prose-lg">On the water we're all sailors, no more difference.</p>
			</div>
		</div>
		<img src={groupPicture} alt="the group at the docks" class="lg:w-1/2 rounded" />
	</div>
</header>

<hr />

<section class="opacity-90">
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
		{#each roles as { title, description, src }}
			<li
				class="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl bg-primary-100"
			>
				<img
					class="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-l-lg"
					{src}
					alt=""
				/>
				<div class="flex flex-col justify-between p-4 leading-normal">
					<h5 class="mb-2 text-2xl font-bold tracking-tight">
						{title}
					</h5>
					<p class="mb-3 font-normal prose-lg">
						{description}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
