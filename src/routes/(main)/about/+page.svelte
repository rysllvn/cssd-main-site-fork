<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	// images
	import fleetShot from '$lib/assets/images/about/fleet_shot.jpg';
	import groupPhoto from '$lib/assets/images/about/two.jpg';
	import one from '$lib/assets/images/about/one.jpg';

	import { boardMembers } from '$lib/copy/board_members';
</script>

<header>
	<h1 class="h1">About</h1>
</header>

<hr />

<div class="flex gap-8">
	<div class="w-1/2 gap-10 flex flex-col">
		<p>
			Challenged Sailors San Diego is a registered 501c3 nonprofit dedicated to making weekly
			sailing FREE for disabled sailors. We are a nationally recognized disabled recreative program
			with a unique offering - we sail every weekend!
		</p>
		<p>
			Every Friday and Saturday our sailors and volunteers come together to go sailing on San
			Diego's beautiful harbor waters.
		</p>
		<p>
			The participants and volunteers of Challenged Sailors San Diego have experienced the
			transformative nature of adaptive sailing. Some of us are experienced sailors. Some are
			beginners. All have seen a tremendous improvement in their lives through adaptive sailing.
		</p>
		<img class="shadow rounded grid" src={fleetShot} alt="Fleet of Martin 16s together" />
		<p>
			We are all about building community and a sense of belonging by sharing incredible moments of
			active freedom on the water. Many of us have had to learn to live with restrictions on
			mobility and independence. Challenged Sailors San Diego's adaptive sailing program is designed
			to minimize these restrictions. Stepping aboard a special adapted boat throughout the waters
			of San Diego Bay provides a sense of confidence, autonomy and accomplishment that can have a
			significant positive effect on life.
		</p>
		<p>
			Our fleet is made up of eight Martin 16s. We are one of the few authorized fleets of these
			specially-designed adaptive sailboats. These are 16' sailboats designed for ease of access,
			use and enjoyment.
		</p>
	</div>
	<div class="w-1/2">
		<img class="rounded shadow" src={one} alt="" />
	</div>
</div>

<hr />

<div class="grid grid-cols-1 md:grid-cols-2 gap-7">
	<img class="grid rounded shadow" src={groupPhoto} alt="Sailors and Volunteers" />
	<div class="flex flex-col gap-10">
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
	<h2 class="h2 mb-4">Board of Directors</h2>
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
