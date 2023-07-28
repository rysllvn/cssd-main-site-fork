<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let largeCalendarLoading = true;
	let smallCalendarLoading = true;

	function hideLargeSpinner() {
		largeCalendarLoading = false;
	}
	function hideSmallSpinner() {
		smallCalendarLoading = false;
	}
</script>

<main class="container mx-auto p-4 lg:p-10 flex flex-col items-center">
	<h1 class="h1 mb-5">Calendar</h1>
	<div class="hidden lg:flex justify-center">
		{#if largeCalendarLoading}
			<ProgressRadial value={undefined} />
		{/if}
		<iframe
			on:load={hideLargeSpinner}
			title="Calendar"
			src="https://www.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=scheduler%40challengedsailors.org&color=%232952A3&ctz=America%2FLos_Angeles"
			style="border: 0; border-radius: 6px;"
			width="800"
			height="600"
			frameborder="0"
			scrolling="no"
		/>
	</div>
	<div class="block lg:hidden">
		{#if smallCalendarLoading}
			<ProgressRadial value={undefined} />
		{/if}
		<iframe
			on:load={hideSmallSpinner}
			title="Calendar"
			src="https://www.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=scheduler%40challengedsailors.org&color=%232952A3&ctz=America%2FLos_Angeles"
			style="border: 0; border-radius: 6px;"
			width="400"
			height="600"
			frameborder="0"
			scrolling="no"
		/>
	</div>
</main>
