<script lang="ts">
	import { ProgressRadial, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	let submitting = false;

	let name = '';
	let email = '';
	let number = '';
	let about = '';
	let experience = '';
	let volunteerRole = '';
	let wheelchair = false;
	let requiresSupport = false;
	let currentDisability = false;
	let days: string[] = [];

	const clearInputs = () => {
		name = '';
		email = '';
		number = '';
		about = '';
		experience = '';
		volunteerRole = '';
		wheelchair = false;
		requiresSupport = false;
		currentDisability = false;
		days = [];
	};

	const successModal: ModalSettings = {
		type: 'alert',
		// Data
		title: 'Application Submitted',
		body: 'We received your message and will be in touch with you soon!',
		buttonTextCancel: 'Okay'
	};
	const failureModal: ModalSettings = {
		type: 'alert',
		title: 'Something went wrong!',
		body: 'You can get in touch with us by email at <a class="anchor" href="mailto:info@challengedsailors.org">info@challengedsailors.org</a>',
		buttonTextCancel: 'Okay'
	};

	const handleSubmit = async (data: { currentTarget: HTMLFormElement | undefined }) => {
		submitting = true;
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		submitting = false;
		if (result.success) {
			console.log(result);
			clearInputs();
			modalStore.trigger(successModal);
		} else {
			modalStore.trigger(failureModal);
		}
	};
</script>

<form
	class="shadow bg-surface-100 p-2 lg:p-8 rounded-lg max-h-full overflow-y-auto flex flex-col"
	on:submit|preventDefault={handleSubmit}
>
	<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
	<h2 class="h2 self-center">Sailing Application</h2>
	<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 mb-4">
		<div class="col-span-6 sm:col-span-4">
			<label for="name" class="label">Name</label>
			<div class="mt-2">
				<input
					type="text"
					name="name"
					id="name"
					autocomplete="name"
					class="input"
					required
					bind:value={name}
				/>
			</div>
		</div>

		<div class="col-span-6 sm:col-span-3">
			<label for="phone-number" class="label">Phone Number</label>
			<div class="mt-2">
				<input
					type="tel-national"
					name="phone-number"
					id="phone-number"
					autocomplete="tel-national"
					class="input p-2"
					required
					bind:value={number}
				/>
			</div>
		</div>

		<div class="col-span-6 sm:col-span-3">
			<label for="email" class="label">Email address</label>
			<div class="mt-2">
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					class="input"
					required
					bind:value={email}
				/>
			</div>
		</div>
		<hr class="col-span-6 my-8" />

		<div class="col-span-6 lg:col-span-3">
			<label for="volunteer role" class="label"
				>If wanting to Volunteer, are you most interested in</label
			>
			<select name="volunteer role" class="select" size="3" bind:value={volunteerRole}>
				<option value="companion sailor">Companion Sailor</option>
				<option value="dock support">Dock Support</option>
				<option value="administrative">Administrative</option>
			</select>
		</div>

		<div class="col-span-6 lg:col-span-3">
			<label for="experience" class="label">How would you describe your sailing experience</label>
			<select name="experience" class="select" size="4" required bind:value={experience}>
				<option value="newbie">Total newbie</option>
				<option value="few times">Been sailing a couple times</option>
				<option value="frequent sailor">Frequent sailor</option>
				<option value="very experienced">Very Experienced</option>
			</select>
		</div>
		<div class="col-span-6 lg:col-span-3">
			<label for="preferred days" class="label">What times or dates are you most available</label>
			<select name="preferred days" multiple class="select" size="2" required bind:value={days}>
				<option value="Friday">Friday 11:30am-3:00pm</option>
				<option value="Saturday">Saturday 11:30am-3:00pm</option>
			</select>
		</div>

		<hr class="col-span-6 my-8" />

		<div class="col-span-6">
			<label class="flex gap-3 items-center">
				<input
					name="has current physical disability or medical limitation"
					class="checkbox"
					type="checkbox"
					bind:value={currentDisability}
				/>
				<p>Do you currently have any physical disabilities or medical limitations?</p>
			</label>
		</div>

		<div class="col-span-6">
			<label class="flex gap-3 items-center">
				<input
					name="requires support down ramp or into boat"
					class="checkbox"
					type="checkbox"
					bind:value={requiresSupport}
				/>
				<p>Do you require any special support getting down a ramp and into/out of a sailboat?</p>
			</label>
		</div>
		<div class="col-span-6">
			<label class="flex gap-3 items-center">
				<input name="uses wheelchair" class="checkbox" type="checkbox" bind:value={wheelchair} />
				<p>Do you use a wheelchair?</p>
			</label>
		</div>
		<hr class="col-span-6 my-8" />

		<textarea
			name="about"
			class="textarea col-span-6"
			rows="4"
			placeholder="Tell us a little about youself?"
			bind:value={about}
		/>
	</div>

	<div class="mt-6 flex items-center justify-center gap-x-6">
		<button class="btn variant-filled-primary cursor-pointer h-22 w-22">
			{#if !submitting}
				Submit
			{:else}
				<ProgressRadial width="w-3" value={undefined} />
			{/if}
		</button>
	</div>
</form>
