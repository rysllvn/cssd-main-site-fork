<script lang="ts">
	import sailingManual from '$lib/assets/documents/CSSD Sailing Manual Online 20230707 updates.pdf';
	import dockManual from '$lib/assets/documents/CSSD Dock Leader Manual 20230711updts.pdf';
	import martinManual from '$lib/assets/documents/Martin 16 Setup 2_02.pdf';
	import chaseManual from '$lib/assets/documents/CSSD Chase Boat Operator Manual Online 20221014Final.pdf';
	import visuallyImpairedManual from '$lib/assets/documents/Sailing Manual Online visual impaired v1.pdf';

	const manuals = [
		{
			href: sailingManual,
			title: 'Sailing Manual'
		},
		{
			href: dockManual,
			title: 'Dock Leader Manual'
		},
		{
			href: martinManual,
			title: 'Martin 16 Setup'
		},
		{
			href: chaseManual,
			title: 'Chase Boat Operator Manual'
		},
		{
			href: visuallyImpairedManual,
			title: 'Sailing Manual for Visually Impaired'
		}
	];
</script>

<h1 class="h1">Manuals</h1>
<hr />
<section>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
		{#each manuals as { href, title }}
			<li class="card p-5 bg-primary-100 flex items-center shadow-sm gap-4">
				<iconify-icon icon="teenyicons:pdf-outline" class="text-3xl" />
				<a class="anchor" {href} download>{title}</a>
			</li>
		{/each}
	</ul>
</section>
