<script lang="ts">
	import { organizations } from '$lib/copy/helpful_links';
</script>

<header>
	<h1 class="h1">Helpful Links</h1>
</header>
<hr />

<section>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
		{#each organizations as { name, description, links }}
			<li class="card p-5 bg-primary-100 flex flex-col shadow-sm">
				<h3>{name}</h3>
				<p>{description}</p>
				{#each links as { href, title }}
					<ul>
						<li>
							<a target="_blank" class="anchor" {href}>{title}</a>
						</li>
					</ul>
				{/each}
			</li>
		{/each}
	</ul>
</section>
