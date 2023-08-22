<script lang="ts">
	import form501C from '$lib/assets/documents/501(c)(3) IRS Determination Letter Oct 2015.pdf';
	import form9902020 from '$lib/assets/documents/990ez 2020.pdf';
	import form9902021 from '$lib/assets/documents/990ez 2021 CSSD.pdf';

	const forms = [
		{
			href: form501C,
			title: '501(c)(3) IRS Determination Letter Oct 2015'
		},
		{ href: form9902020, title: '990ez 2020' },
		{ href: form9902021, title: '990ez 2021' }
	];
</script>

<h1 class="h1">Forms</h1>
<hr />
<section>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
		{#each forms as { href, title }}
			<li class="card p-5 bg-primary-100 flex items-center shadow-sm gap-8">
				<a class="anchor" {href} download>{title}</a>
			</li>
		{/each}
	</ul>
</section>
