<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
</script>

<form
	class="w-modal-wide bg-surface-100 p-2 lg:p-8 rounded-lg max-h-full overflow-y-auto flex flex-col"
>
	<h2 class="h3 self-center">Sailing Application</h2>
	<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-4">
		<div class="sm:col-span-3">
			<label for="first-name" class="label">First name</label>
			<div class="mt-2">
				<input
					type="text"
					name="first-name"
					id="first-name"
					autocomplete="given-name"
					class="input"
				/>
			</div>
		</div>

		<div class="sm:col-span-3">
			<label for="last-name" class="label">Last name</label>
			<div class="mt-2">
				<input
					type="text"
					name="last-name"
					id="last-name"
					autocomplete="family-name"
					class="input"
				/>
			</div>
		</div>

		<div class="sm:col-span-4">
			<label for="email" class="label">Email address</label>
			<div class="mt-2">
				<input id="email" name="email" type="email" autocomplete="email" class="input" />
			</div>
		</div>
	</div>

	<hr />

	<div class="space-y-12">
		<div class="pb-12">
			<div class="mt-10 grid grid-cols-1 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-6">
				<div class="md:col-span-3">
					<label for="goals" class="label">What are your goals and interests?</label>
					<div class="mt-2">
						<textarea rows="2" name="goals" class="textarea" />
					</div>
				</div>
				<div class="md:col-span-3">
					<label for="questions" class="label">Questions, comments, suggestions?</label>
					<div class="mt-2">
						<textarea rows="2" name="questions" class="textarea" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-center gap-x-6">
		<button on:click={() => modalStore.close()} type="button" class="btn variant-ghost-secondary"
			>Cancel</button
		>
		<button type="submit" class="btn variant-filled-primary">Submit</button>
	</div>
</form>
