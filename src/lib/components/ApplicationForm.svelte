<form class="shadow bg-surface-100 p-2 lg:p-8 rounded-lg max-h-full overflow-y-auto flex flex-col">
	<h2 class="h2 self-center">Sailing Application</h2>
	<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 mb-4">
		<div class="col-span-6 sm:col-span-4">
			<label for="name" class="label">Name</label>
			<div class="mt-2">
				<input type="text" name="name" id="name" autocomplete="name" class="input" />
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
				/>
			</div>
		</div>

		<div class="col-span-6 sm:col-span-3">
			<label for="email" class="label">Email address</label>
			<div class="mt-2">
				<input id="email" name="email" type="email" autocomplete="email" class="input" />
			</div>
		</div>
		<hr class="col-span-6 my-8" />

		<div class="col-span-6 lg:col-span-3">
			<label for="email" class="label">If wanting to Sail, which day(s) are best for you? </label>
			<select multiple class="select" size="2" value={[]}>
				<option value="Friday">Friday 11:30am-3:00pm</option>
				<option value="Saturday">Saturday 11:30am-3:00pm</option>
			</select>
		</div>

		<div class="col-span-6 lg:col-span-3">
			<label for="email" class="label">If wanting to Volunteer, are you most interested in</label>
			<select class="select" size="3" value="">
				<option value="Friday">Companion Sailor</option>
				<option value="Saturday">Dock Support</option>
				<option value="Saturday">Administrative</option>
			</select>
		</div>

		<div class="col-span-6 lg:col-span-3">
			<label for="email" class="label">How would you describe your sailing experience</label>
			<select class="select" size="4" value="">
				<option value="Friday">Total newbie</option>
				<option value="Saturday">Been sailing a couple times</option>
				<option value="Saturday">Frequent sailor</option>
				<option value="Saturday">Very Experienced</option>
			</select>
		</div>
		<div class="col-span-6 lg:col-span-3">
			<label for="email" class="label">What times or dates are you most available</label>
			<select multiple class="select" size="2" value={[]}>
				<option value="Friday">Friday 11:30am-3:00pm</option>
				<option value="Saturday">Saturday 11:30am-3:00pm</option>
			</select>
		</div>

		<hr class="col-span-6 my-8" />

		<div class="col-span-6">
			<label class="flex gap-3 items-center">
				<input class="checkbox" type="checkbox" />
				<p>Do you currently have any physical disabilities or medical limitations?</p>
			</label>
		</div>

		<div class="col-span-6">
			<label class="flex gap-3 items-center">
				<input class="checkbox" type="checkbox" />
				<p>Do you require any special support getting down a ramp and into/out of a sailboat?</p>
			</label>
		</div>
		<div class="col-span-6">
			<label class="flex gap-3 items-center">
				<input class="checkbox" type="checkbox" />
				<p>Do you use a wheelchair?</p>
			</label>
		</div>
		<hr class="col-span-6 my-8" />

		<textarea class="textarea col-span-6" rows="4" placeholder="Tell us a little about youself?" />
	</div>

	<div class="mt-6 flex items-center justify-center gap-x-6">
		<button type="button" class="btn variant-filled-secondary">Cancel</button>
		<button type="submit" class="btn variant-filled-primary">Submit</button>
	</div>
</form>
