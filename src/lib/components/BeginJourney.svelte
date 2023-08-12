<script lang="ts">
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const newMemberModal: ModalSettings = {
		type: 'component',
		component: 'newMemberForm'
	};
	function newMemberForm() {
		modalStore.trigger(newMemberModal);
	}
</script>

<p
	class="shadow whitespace-nowrap flex items-center gap-2 prose-2xl card variant-filled-surface p-3 w-fit"
>
	<button class="btn variant-filled-primary w-fit text-2xl shadow-sm" on:click={newMemberForm}>
		Click Here
	</button>
	to begin your journey!
</p>
