<script lang="ts">
	import dockSupportImg from '$lib/assets/images/IMG_3701.jpg';
	import companionImage from '$lib/assets/images/IMG_4296.jpg';

	const roles = [
		{
			title: 'Dock support',
			description: 'Help setup the the boats. Launch and land our sailors.',
			src: dockSupportImg
		},
		{
			title: 'Companion sailor',
			description:
				'Ride along with our sailors to ensure everything goes smoothly and everyone has a great time.',
			src: companionImage
		},
		{
			title: 'ASL Interpreters',
			description: '',
			src: companionImage
		},
		{
			title: 'Back Office Support',
			description: '',
			src: companionImage
		},
		{
			title: 'Fund Raising and Public Relations',
			description: '',
			src: companionImage
		}
	];
</script>

<header class="flex gap-4 flex-col items-center">
	<h1 class="h1">
		<iconify-icon icon="twemoji:construction" />
		Volunteer
		<iconify-icon icon="twemoji:construction" />
	</h1>
	<p>Volunteers are welcome and appreciated.</p>
</header>
<hr />
<section class="opacity-90">
	<h2 class="h2 mb-8">There are a variety of ways to help us out.</h2>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
		{#each roles as { title, description, src }}
			<li
				class="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl bg-primary-100"
			>
				<img
					class="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
					{src}
					alt=""
				/>
				<div class="flex flex-col justify-between p-4 leading-normal">
					<h5 class="mb-2 text-2xl font-bold tracking-tight">
						{title}
					</h5>
					<p class="mb-3 font-normal">
						{description}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
