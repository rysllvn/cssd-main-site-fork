<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import topPicture from '$lib/assets/images/IMG_3704.jpg';
	import peter from '$lib/assets/images/IMG_3690.jpg';
	import sam from '$lib/assets/images/headshots/IMG_1031.jpg';

	const boardMembers = [
		{ name: 'Peter Phillips', title: 'President', src: peter },
		{ name: 'Terry Green', title: 'Treasurer' },
		{
			name: 'Sam Graber',
			title: 'Secretary',
			bio: 'Sam Graber is originally from Washington, D.C. but grew up sailing during summers in the NY Adirondacks on Upper Saranac Lake when his Mom forced him to get on the damn boat. Now he’s a crazy foredecker, never reefs and sails his own Catalina 22 without a motor. But he is VERY responsible with CSSD as a companion sailor. Sam is thrilled to be using his time and talents to serve the disabled community. Every day is a joy when we can give the gift of making memories on the water while being powered by the wind. Let’s go sailing!',
			src: sam
		},
		{ name: 'Ryan Craft', title: 'Director' },
		{ name: 'Eric Matus', title: 'Director' },
		{ name: 'Sue Taetzsch', title: 'Director' },
		{ name: 'Dan Willan', title: 'Director' }
	];
</script>

<header>
	<h1 class="h1">About</h1>
</header>

<hr />

<div class="flex flex-col md:flex-row">
	<div class="flex flex-col md:w-2/3 prose-base">
		<p>
			Challenged Sailors San Diego is a registered 501c3 nonprofit dedicated to making weekly
			sailing FREE for disabled sailors. We are a nationally recognized disabled recreative program
			with a unique offering – we sail every weekend!
		</p>
		<p>
			Every Friday and Saturday our sailors and volunteers come together to go sailing on San
			Diego’s beautiful harbor waters.
		</p>
		<p>
			The participants and volunteers of Challenged Sailors San Diego have experienced the
			transformative nature of adaptive sailing. Some of us are experienced sailors. Some are
			beginners. All have seen a tremendous improvement in their lives through adaptive sailing.
		</p>
		<p>
			We are all about building community and a sense of belonging by sharing incredible moments of
			active freedom on the water. Many of us have had to learn to live with restrictions on
			mobility and independence. Challenged Sailors San Diego’s adaptive sailing program is designed
			to minimize these restrictions. Stepping aboard a special adapted boat oat throughout the
			waters of San Diego Bay provides a sense of confidence, autonomy and accomplishment that can
			have a significant positive effect on life.
		</p>
		<p>
			Our fleet is made up of eight Martin 16s. We are one of the few authorized fleets of these
			specially-designed adaptive sailboats. These are 16’ sailboats designed for ease of access,
			use and enjoyment.
		</p>
	</div>
	<div>
		<img class="max-h-[16rem] max-w-full" src={topPicture} alt="" />
	</div>
</div>
<hr />

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<div class="grid">
		<img class="max-h-[16rem] max-w-full" src={topPicture} alt="" />
	</div>
	<div class="grid gap-1">
		<section class="mb-4">
			<h2 class="h2 mb-4">Mission</h2>
			<p class="prose-base">
				Challenged Sailors San Diego provides therapeutic and recreational adaptive sailing
				opportunities for people with disabilities to enhance their dignity, well-being and
				independence.
			</p>
		</section>
		<section>
			<h2 class="h2 mb-4">Vision</h2>
			<p>
				Challenged Sailors San Diego will continue to be a nationally-recognized center for adaptive
				sailing and related activities. We will grow to serve more sailors, learn and share new
				techniques, and add new boats to our fleet, which will be used to further our mission.
			</p>
		</section>
	</div>
</div>

<hr />
<section class="flex flex-col">
	<h2 class="h2 self-center mb-4">Management</h2>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each boardMembers as { name, title, src, bio }}
			<li class="flex items-center gap-3 card bg-primary-100 p-4 shadow">
				<div class="flex flex-col w-1/2 items-center gap-4">
					<Avatar {src} width="w-full" />
					<div>
						<h3 class="h3">{name}</h3>
						<h4>{title}</h4>
					</div>
				</div>
				<div class="w-1/2">
					<p>{bio}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
