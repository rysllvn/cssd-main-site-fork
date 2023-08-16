<script lang="ts">
	import logo from '$lib/assets/images/logos/CSSD_EEM_Logo2.jpg';
</script>

<footer class="bg-surface-50">
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<img class="w-48 md:w-64 rounded-lg" src={logo} alt="Challenged Sailors San Diego Logo" />
			<ul
				class="flex flex-col flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<li>
					<a href="/about" class="anchor text-base">About</a>
				</li>
				<li>
					<a href="/contact" class="anchor text-base">Contact</a>
				</li>
			</ul>
			<div>
				<a href="https://www.facebook.com/challengedsailors/">
					<iconify-icon icon="logos:facebook" class="text-4xl hover:scale-110" />
				</a>
				<a href="https://www.instagram.com/challengedsailors">
					<iconify-icon icon="skill-icons:instagram" class="text-4xl hover:scale-110" />
				</a>
			</div>
		</div>
	</div>
</footer>
