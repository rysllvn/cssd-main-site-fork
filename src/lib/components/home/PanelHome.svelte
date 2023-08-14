<script lang="ts">
	import Hero from './Hero.svelte';
	import YoutubeEmbed from './YoutubeEmbed.svelte';
	import groupPicture from '$lib/assets/images/group_photo.jpg';
</script>

<Hero src={groupPicture}>
	<header
		id="header"
		class="text-white mb-10 variant-glass-surface card w-full px-4 py-6 flex flex-col items-center gap-10"
	>
		<h1 class="h2">
			Adaptive sailing at its finest! Every Friday and Saturday on San Diego Harbor. For FREE, no
			experience necessary. We have special boats to make it fun and enjoyable for a wide range of
			disabilities.
		</h1>
		<p class="h2">
			Winner of the US Sailing 2022 Robie Pierce Award for excellence in Adaptive Sailing.
		</p>
		<p class="h2 flex items-center gap-2">
			<a href="/application" class="btn variant-filled-primary w-fit text-4xl"> Click Here </a>
			to begin your journey!
		</p>
	</header>
	<YoutubeEmbed />
</Hero>
