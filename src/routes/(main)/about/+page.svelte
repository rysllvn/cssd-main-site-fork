<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import topPicture from '$lib/assets/images/IMG_3704.jpg';

	const boardMembers = [
		{ name: 'Peter Phillips', title: 'President' },
		{ name: 'Terry Green', title: 'Treasurer' },
		{ name: 'Sam Graber', title: 'Secretary' },
		{ name: 'Ryan Craft', title: 'Director' },
		{ name: 'Eric Matus', title: 'Director' },
		{ name: 'Sue Taetzsch', title: 'Director' },
		{ name: 'Dan Willan', title: 'Director' }
	];
</script>

<header class="flex justify-center">
	<h1 class="h1">
		<iconify-icon icon="twemoji:construction" />
		About
		<iconify-icon icon="twemoji:construction" />
	</h1>
</header>
<hr />

<section class="flex flex-col gap-5">
	<h2 class="h2">Why adaptive sailing?</h2>
	<div class="flex flex-col md:flex-row gap-4">
		<div class="flex flex-col gap-5 md:w-2/3">
			<p>
				The US Census Bureau estimated that nearly one in five people in our country have a
				disability. Many of these people have had to learn to live with restrictions on their
				mobility and independence. Challenged Sailors San Diego’s adaptive sailing program is
				designed to minimize these restrictions for our sailors. Learning the skills to maneuver a
				boat throughout the waters of San Diego Bay provides a sense of confidence, autonomy, and
				accomplishment that can have a significant positive effect on many aspects of the sailors’
				lives.
			</p>
			<p>
				The volunteers and participants of Challenged Sailors San Diego have experienced the
				transformative nature of adaptive sailing personally. Some are very experienced sailors,
				some are beginners but all have seen a tremendous improvement in their lives through
				adaptive sailing.
			</p>
			<blockquote class="blockquote">
				“a sailboat is not just a mast or sails or a rudder; a sailboat is freedom”. For those with
				a disability that significantly limits their mobility on land, that statement is a reality.
				-
				<strong>Capt. Jack Sparrow - Pirates of the Caribbean</strong>
			</blockquote>
		</div>
		<div>
			<img class="max-h-[16rem] max-w-full" src={topPicture} alt="" />
		</div>
	</div>
</section>
<hr />

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<div class="grid">
		<section class="mb-4">
			<h2 class="h2 mb-4">Our Mission</h2>
			<p>
				Challenged Sailors San Diego provides therapeutic and recreational adaptive sailing
				opportunities for people with disabilities to enhance their dignity, well-being, and
				independence.
			</p>
		</section>
		<img class="max-h-[16rem] max-w-full" src={topPicture} alt="" />
	</div>
	<div class="grid gap-1">
		<section>
			<h2 class="h2 mb-4">Vision</h2>
			<p>
				Challenged Sailors San Diego will become a nationally recognized center for adaptive sailing
				and related activities. We will grow to serve more sailors, learn and share new techniques,
				and add new boats to our fleet, which will be used to further our mission.
			</p>
		</section>
		<section class="mb-2">
			<h2 class="h2 mb-4">Values</h2>
			<p>
				Challenged Sailors San Diego will be transparent in all we do, open with all of our
				stakeholders and follow our mission to the best of our ability. We will treat all of our
				participants with dignity and care.
			</p>
		</section>
	</div>
</div>
<hr />
<section class="flex flex-col">
	<h2 class="h2 self-center mb-4">Management</h2>
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each boardMembers as { name, title }}
			<li class="flex items-center gap-3 card bg-secondary-100 p-4 shadow">
				<Avatar />
				<div>
					<h3 class="h3">{name}</h3>
					<h4>{title}</h4>
				</div>
			</li>
		{/each}
	</ul>
</section>
