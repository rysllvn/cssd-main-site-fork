<script lang="ts">
	import Map from '$lib/components/Map.svelte';
</script>

<header class="flex justify-center items-center gap-2">
	<iconify-icon icon="twemoji:construction" class="text-5xl" />
	<h1 class="h1 self-center">Getting Here</h1>
	<iconify-icon icon="twemoji:construction" class="text-5xl" />
</header>
<hr />

<Map />

<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
	<li class="card p-2 variant-filled-secondary">
		By car - free parking is available (except on some holidays and special events) in the first row
		of spaces west of the Sunroad Resort Marina office building.
	</li>
	<li class="card p-2 variant-filled-secondary">
		MTS buses and trolleys serve much of central SD County, Bus routes 923 and 992 stop about 0.6
		mi. from our location at Sunroad Resort Marina. Information for riders with disabilities.
	</li>
	<li class="card p-2 variant-filled-secondary">
		MTS Access operates wheelchair lift-equipped buses which provide transportation to transit
		riders whose disabilities prevent them from using fixed route bus or Trolley services.
		Passengers must be certified and make reservations in advance.
	</li>
	<li class="card p-2 variant-filled-secondary">
		FACT (Facilitating Access to Coordinated Transportation) provides a one-stop shop for seniors
		and people with disabilities to find and arrange transportation in San Diego County.
	</li>
</ul>
