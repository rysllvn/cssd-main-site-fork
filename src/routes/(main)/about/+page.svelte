<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	// images
	import fleetShot from '$lib/assets/images/about/fleet_shot.jpg?w=400&imagetools';
	import groupPhoto from '$lib/assets/images/about/two.jpg?w=500&imagetools';
	import one from '$lib/assets/images/about/one.jpg?w=300&imagetools';

	import { boardMembers } from '$lib/copy/board_members';
</script>

<header>
	<h1 class="h1">About</h1>
</header>

<hr />

<section class="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-8">
	<img class="shadow rounded grid w-96" src={fleetShot} alt="Fleet of Martin 16s together" />
	<div class="flex flex-col gap-8">
		<p class="prose-base">
			Challenged Sailors San Diego is a registered 501c3 nonprofit dedicated to making weekly
			sailing FREE for disabled sailors. We are a nationally recognized disabled recreative program
			with a unique offering - we sail every weekend!
		</p>
		<p class="prose-base">
			Every Friday and Saturday our sailors and volunteers come together to go sailing on San
			Diego's beautiful harbor waters.
		</p>
		<p class="prose-base">
			The participants and volunteers of Challenged Sailors San Diego have experienced the
			transformative nature of adaptive sailing. Some of us are experienced sailors. Some are
			beginners. All have seen a tremendous improvement in their lives through adaptive sailing.
		</p>
	</div>
	<img class="grid rounded shadow" src={one} alt="" />
</section>

<hr />

<section class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-7">
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
</section>

<hr />
<section class="flex flex-col">
	<h2 class="h2 mb-4">Board of Directors</h2>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each boardMembers as { name, title, src, bio }}
			<li class="card bg-primary-100 p-4 shadow h-fit">
				<div class="my-auto mb-1 flex flex-col w-72 h-fit items-center gap-4 lg:float-left">
					<Avatar {src} width="w-36 lg:w-48" />
					<div>
						<h3 class="h3">{name}</h3>
						<h4>{title}</h4>
					</div>
				</div>
				<p>{bio}</p>
			</li>
		{/each}
	</ul>
</section>
