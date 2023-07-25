<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import NewMemberForm from '$lib/components/NewMemberForm.svelte';
</script>

<h1 class="h1">Go Sailing</h1>
<p>We love to sail and think you should join us. We go sailing Fridays and Saturdays.</p>

<section class="card">
	<Accordion>
		<AccordionItem>
			<svelte:fragment slot="summary">
				<p>
					If you'd like to go, we ask that you fill out this form so we can better understand how to
					make the day go well.
				</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<NewMemberForm />
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>
