<script lang="ts">
	const roles = [
		{
			title: 'Dock support',
			description: 'Help setup the the boats. Launch and land our sailors.'
		},
		{
			title: 'Companion sailor',
			description:
				'Ride along with our sailors to ensure everything goes smoothly and everyone has a great time.'
		}
	];
</script>

<header class="flex gap-4 flex-col items-center">
	<h1 class="h1">Volunteer</h1>
	<p>Volunteers are welcome and appreciated.</p>
</header>
<section class="opacity-90">
	<h2 class="h2 mb-4">There are a variety of ways to help us out.</h2>
	<ul class="flex flex-wrap gap-2">
		{#each roles as { title, description }}
			<li class="card bg-primary-200 shadow-sm lg:w-1/3 p-2">
				<h3 class="h3 mb-1">
					{title}
				</h3>
				<hr />
				<p>
					{description}
				</p>
			</li>
		{/each}
	</ul>
</section>
