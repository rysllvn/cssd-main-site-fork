<script lang="ts">
	import Hero from './Hero.svelte';
	import YoutubeEmbed from './YoutubeEmbed.svelte';
	import groupPicture from '$lib/assets/images/two_boats.jpg';
</script>

<Hero src={groupPicture}>
	<header
		id="header"
		class="text-white mb-10 variant-glass-surface card w-full px-4 py-6 flex flex-col items-center gap-10"
	>
		<p class="prose-2xl">
			Adaptive sailing at its finest! Every Friday and Saturday on San Diego Harbor. For FREE, no
			experience necessary. We have special boats to make it fun and enjoyable for a wide range of
			disabilities.
		</p>
		<p class="prose-2xl">
			Winner of the US Sailing 2022 Robie Pierce Award for excellence in Adaptive Sailing.
		</p>
		<p class="h2 flex items-center gap-2">
			<a href="/application" class="text-white btn bg-primary-700 w-fit text-4xl"> Click Here </a>
			to begin your journey!
		</p>
	</header>
	<YoutubeEmbed />
</Hero>
