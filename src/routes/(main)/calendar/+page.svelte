<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let largeCalendarLoading = true;
	let mediumCalendarLoading = true;
	let smallCalendarLoading = true;

	function hideLargeSpinner() {
		largeCalendarLoading = false;
	}
	function hideMediumSpinner() {
		mediumCalendarLoading = false;
	}
	function hideSmallSpinner() {
		smallCalendarLoading = false;
	}
</script>

<header>
	<h1 class="h1">Calendar</h1>
</header>

<hr />

<div class="hidden lg:flex justify-center flex-col items-center w-fit shadow self-center">
	{#if largeCalendarLoading}
		<ProgressRadial value={undefined} />
	{/if}
	<iframe
		class="w-full aspect-video"
		on:load={hideLargeSpinner}
		title="Calendar"
		src="https://www.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=scheduler%40challengedsailors.org&color=%232952A3&ctz=America%2FLos_Angeles"
		style="border: 0; border-radius: 6px;"
		width="1200"
		height="800"
		frameborder="0"
		scrolling="no"
	/>
</div>
<div class="hidden md:flex lg:hidden justify-center flex-col items-center w-fit shadow self-center">
	{#if mediumCalendarLoading}
		<ProgressRadial value={undefined} />
	{/if}
	<iframe
		on:load={hideMediumSpinner}
		title="Calendar"
		src="https://www.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=scheduler%40challengedsailors.org&color=%232952A3&ctz=America%2FLos_Angeles"
		style="border: 0; border-radius: 6px;"
		width="800"
		height="600"
		frameborder="0"
		scrolling="no"
	/>
</div>
<div class="block md:hidden self-center shadow">
	{#if smallCalendarLoading}
		<ProgressRadial value={undefined} />
	{/if}
	<iframe
		on:load={hideSmallSpinner}
		title="Calendar"
		src="https://www.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=scheduler%40challengedsailors.org&color=%232952A3&ctz=America%2FLos_Angeles&mode=AGENDA"
		style="border: 0; border-radius: 6px;"
		width="380"
		height="600"
		frameborder="0"
		scrolling="no"
	/>
</div>
