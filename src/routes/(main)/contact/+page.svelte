<script lang="ts">
	import BeginJourney from '$lib/components/BeginJourney.svelte';
	import picOne from '$lib/assets/images/contact/contact_one.jpg?w=400&imagetools';
</script>

<header>
	<h1 class="h1">Contact</h1>
</header>
<hr />
<div class="flex gap-8 flex-col md:flex-row items-center">
	<BeginJourney />
	<img src={picOne} alt="Martin 16 on a port tack" class="rounded shadow" />
</div>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
	<li class="card p-5 bg-primary-100 shadow-sm flex items-center">
		<a href="mailto:info@challengedsailors.org" class="flex items-center anchor gap-8">
			<iconify-icon icon="ic:baseline-email" class="text-6xl text-primary-800" />
			info@challengedsailors.org
		</a>
	</li>
	<li class="card p-5 bg-primary-100 flex items-center shadow-sm gap-8">
		<iconify-icon icon="streamline-emojis:open-mailbox-with-raised-flag" class="text-6xl" />
		<div class="flex flex-col">
			<div class="font-bold">Mailing Address</div>
			<div>PO Box 6994, San Diego CA 92166</div>
		</div>
	</li>
	<li class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<iconify-icon icon="twemoji:sailboat" class="text-6xl" />
		<div class="flex flex-col">
			<div class="font-bold">Sailing Address</div>
			<a
				class="anchor"
				target="_blank"
				href="//maps.google.com/maps?v=2&f=q&ie=UTF8&t=m&iwloc=&q=955+Harbor+Island+Drive%2c+San+Diego%2c+CA%2c+United+States&z=14&source=embed"
			>
				955 Harbor Island Drive
				<div>San Diego, CA</div>
			</a>

			<div>
				Dock D, West end of <a
					class="anchor"
					href="https://shmarinas.com/locations/safe-harbor-sunroad/"
					target="_blank"
					>Sunroad Marina
				</a>
				parking lot
			</div>
		</div>
	</li>
	<li class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<iconify-icon icon="ic:round-phone" class="text-6xl" />
		<div>
			<p class="prose-2xl">+1-760-690-6594</p>
		</div>
	</li>
	<li class="card p-5 bg-primary-100 flex gap-8 items-center shadow-sm">
		<iconify-icon icon="tabler:car" class="text-6xl" />
		<p>
			See our
			<a target="_blank" href="location" class="anchor">Getting Here page</a> for information about transportation
			options.
		</p>
	</li>
	<li class="card p-5 bg-primary-100 flex gap-3 items-center shadow-sm flex-col">
		<h2 class="font-bold">Social Media</h2>
		<div class="flex justify-center gap-6 items-center w-full">
			<a target="_blank" href="https://www.facebook.com/challengedsailors/">
				<iconify-icon icon="logos:facebook" class="text-4xl hover:scale-110" alt="facebook" />
			</a>
			<a target="_blank" href="https://www.instagram.com/challengedsailors">
				<iconify-icon
					icon="skill-icons:instagram"
					class="text-4xl hover:scale-110"
					alt="instagram"
				/>
			</a>
			<a target="_blank" href="https://twitter.com/challsailSD">
				<iconify-icon icon="logos:twitter" class="text-2xl hover:scale-110" alt="twitter" />
			</a>
		</div>
	</li>
</ul>
