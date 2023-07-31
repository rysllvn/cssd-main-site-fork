<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	export let src: string;
	export let alt: string = '';
	export let title: string | undefined = undefined;
	export let body: string | undefined = undefined;
	export let classes = '';

	function triggerModal() {
		modalStore.trigger({
			type: 'alert',
			title,
			body,
			buttonTextCancel: 'Close',
			image: src
		});
	}
</script>

<img
	class={`card card-hover rounded-md cursor-pointer ${classes}`}
	{src}
	{alt}
	loading="lazy"
	on:click={triggerModal}
	on:keypress={triggerModal}
/>
