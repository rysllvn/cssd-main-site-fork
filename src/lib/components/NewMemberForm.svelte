<form action="" class="card w-fit p-4">
	<label class="label">
		<select class="select w-fit">
			<option selected disabled value="1">Select</option>
			<option value="2">Participant</option>
			<option value="3">Volunteer</option>
		</select>
	</label>

	<label class="label">
		<span>Surname</span>
		<input class="input" type="text" placeholder="surname" />
	</label>

	<label class="label">
		<span>Given name</span>
		<input class="input" type="text" placeholder="given name" />
	</label>

	<label class="label">
		<span>Address</span>
		<input class="input" type="text" placeholder="Street number, street name, apartment #" />
	</label>

	<div>
		<label for="phone" class="label">Phone number</label>
		<input
			type="tel"
			id="phone"
			class="input"
			placeholder="123-45-678"
			pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
			required
		/>
	</div>

	<label class="label">
		<span>Other contact information</span>
		<textarea
			class="textarea"
			rows="1"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</label>

	<label class="label">
		<span>What are your goals and interests?</span>
		<textarea
			class="textarea"
			rows="1"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</label>

	<label class="label">
		<span
			>If applicable, please describe your disability and level of mobility, strengths and
			capabilities as it applies to sailing, handling lines and transferring to/from a boat</span
		>
		<textarea
			class="textarea"
			rows="1"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</label>

	<label class="label">
		<span>Please describe your sailing experience</span>
		<textarea
			class="textarea"
			rows="1"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</label>
</form>
