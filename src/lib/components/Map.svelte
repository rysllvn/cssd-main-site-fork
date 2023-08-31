<script lang="ts">
	import { onMount } from 'svelte';

	import mapboxgl from 'mapbox-gl';

	let div: HTMLDivElement;

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoibXJzdWxsaXYiLCJhIjoiY2xoejQxaGRqMTM3cDNycDBiM214a2cxaCJ9.BW8clSgeR-wVqjEQDOHagg';

		const map = new mapboxgl.Map({
			container: div,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [-117.19326258246849, 32.7287],
			zoom: 14
		});
		// Set marker options.
		const marker = new mapboxgl.Marker({
			color: '#86D0CB',
			draggable: true
		})
			.setLngLat([-117.19326258246849, 32.72541741429073])
			.setPopup(
				new mapboxgl.Popup().setHTML(
					'<a class="anchor" target="_blank" href="//maps.google.com/maps?v=2&f=q&ie=UTF8&t=m&iwloc=&q=955+Harbor+Island+Drive%2c+San+Diego%2c+CA%2c+United+States&z=14&source=embed">955 Harbor Island Drive, San Diego, CA</>'
				)
			)
			.addTo(map);
	});
</script>

<div id="map" class="rounded h-[300px] w-[400px]" bind:this={div} />
