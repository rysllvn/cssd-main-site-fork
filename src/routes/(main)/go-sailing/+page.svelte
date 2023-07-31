<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import NewMemberForm from '$lib/components/NewMemberForm.svelte';
</script>

<h1 class="h1">
	<iconify-icon icon="twemoji:construction" />
	Go Sailing!
	<iconify-icon icon="twemoji:construction" />
</h1>
<p class="text-2xl">
	We love to sail and think you should join us. We go sailing on Friday and Saturday.
</p>

<section class="card">
	<Accordion>
		<AccordionItem>
			<svelte:fragment slot="summary">
				<p>
					Please fill out this <button type="button" class="btn variant-filled-primary">form</button
					>
					if you'd like to join us.
				</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<NewMemberForm />
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>
