<script lang="ts">
	import Map from '$lib/components/Map.svelte';
</script>

<header>
	<h1 class="h1">Getting Here</h1>
</header>

<hr />

<section class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center content-center">
	<div class="w-fit h-fit card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<iconify-icon icon="twemoji:sailboat" class="text-6xl" />
		<div class="flex flex-col">
			<div class="font-bold">Sailing Address</div>
			<a
				class="anchor"
				target="_blank"
				href="//maps.google.com/maps?v=2&f=q&ie=UTF8&t=m&iwloc=&q=955+Harbor+Island+Drive%2c+San+Diego%2c+CA%2c+United+States&z=14&source=embed"
			>
				955 Harbor Island Drive
				<div>San Diego, CA</div>
			</a>

			<div>
				Dock D, West end of <a
					class="anchor"
					href="https://shmarinas.com/locations/safe-harbor-sunroad/"
					>Sunroad Marina
				</a>
				parking lot
			</div>
		</div>
	</div>

	<Map />

	<div class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<div>
			<iconify-icon icon="clarity:group-line" class="text-4xl" />
			<iconify-icon icon="mdi:toilet" class="text-4xl" />
		</div>
		<p>
			We have a gathering spot on the top deck at the <a
				class="anchor"
				href="https://shmarinas.com/locations/safe-harbor-sunroad/"
				>Sunroad Marina.
			</a> The clubhouse offers bathrooms.
		</p>
	</div>

	<div class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		There is a ramp to get down from the gathering spot plus a short walk to the D Docks where our
		eight Martin 16 sailboats are located.
	</div>

	<div class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<div>
			<iconify-icon icon="tabler:car" class="text-4xl" />
			<iconify-icon icon="tabler:parking" class="text-4xl" />
		</div>
		<p>
			By car - free parking is available in the back row of spaces west of the Sunroad Resort Marina
			office building, NOT in the first 3 rows.
		</p>
	</div>

	<div class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<iconify-icon icon="mdi:bus" class="text-4xl" />
		<div>
			<a class="anchor" href="http://www.sdmts.com/" target="_blank"> MTS buses and trolleys </a>
			serve much of central SD County, Bus routes 923 and 992 stop about 0.6 mi. from our location at
			Sunroad Resort Marina.
			<a class="anchor" href="http://www.sdmts.com/MTS/accessibility.asp">
				Information for riders with disabilities.
			</a>
		</div>
	</div>

	<div class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<div>
			<iconify-icon icon="mdi:bus" class="text-4xl" />
			<iconify-icon icon="mdi:wheelchair" class="text-4xl" />
		</div>
		<p>
			<a class="anchor" href="https://www.sdmts.com/transit-services/mts-access-paratransit">
				MTS Access
			</a>
			operates wheelchair lift-equipped buses which provide transportation to transit riders whose disabilities
			prevent them from using fixed route bus or Trolley services. Passengers must be certified and make
			reservations in advance.
		</p>
	</div>

	<div class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<div>
			<a class="anchor" href="https://factsd.org/" target="_blank"
				>FACT (Facilitating Access to Coordinated Transportation)</a
			>
			provides a one-stop shop for seniors and people with disabilities to find and arrange transportation
			in San Diego County.
		</div>
	</div>
</section>
