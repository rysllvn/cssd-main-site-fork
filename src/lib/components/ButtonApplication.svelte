<script lang="ts">
	import { drawerStore, modalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	export let large: boolean = false;

	const newMemberModal: ModalSettings = {
		type: 'component',
		component: 'newMemberForm'
	};
	function newMemberForm() {
		drawerStore.close();
		modalStore.trigger(newMemberModal);
	}
</script>

<button
	class={`btn font-bold ${
		large ? 'btn variant-filled-tertiary w-fit text-4xl' : 'btn variant-filled-primary w-full'
	}`}
	on:click={newMemberForm}
>
	Go Sailing!
</button>
