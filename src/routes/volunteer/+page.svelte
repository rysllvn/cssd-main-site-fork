<script lang="ts">
	const roles = [
		{
			title: 'Dock support',
			description: 'Help setup and launch the boats'
		},
		{
			title: 'Companion sailor',
			description: 'companion sailor'
		}
	];
</script>

<h1 class="h1">Volunteer</h1>
<p>We'd love your help.</p>
<section class="card p-4 opacity-90">
	<h2 class="h2">Ways to help out.</h2>
	<ul>
		{#each roles as { title, description }}
			<li>{title}</li>
		{/each}
	</ul>
</section>
