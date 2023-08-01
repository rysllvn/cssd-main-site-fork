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
			center: [-117.19326258246849, 32.72541741429073],
			zoom: 14
		});
		map.on('click', (e) => {
			console.log(e);
		});
	});
</script>

<div id="map" bind:this={div} />

<style>
	#map {
		height: 400px;
		width: 400px;
	}
</style>
