<script lang="ts">
	import logo from '$lib/assets/cssd-logo.jpg';
	import groupSail from '$lib/assets/all-boats.png';
</script>

<div class="container mx-auto p-8 space-y-8">
	<div class="flex gap-1">
		<div class="w-1/2">
			<img src={logo} alt="Challenged Sailors San Diego Logo" class="aspect-" />
		</div>
		<section>
			<h2 class="h2">Our Mission</h2>
			<p>
				Challenged Sailors San Diego provides therapeutic and recreational adaptive sailing
				opportunities for people with disabilities to enhance their dignity, well- being, and
				independence.
			</p>
		</section>

		<section>
			<h2 class="h2">News</h2>
			<ul>
				<li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
				<hr />
				<li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
				<hr />
				<li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
			</ul>
		</section>
	</div>
	<section>
		<img src={groupSail} alt="" class="mb-10" />

		<a class="btn variant-filled-primary" href="https://github.com/">Donate</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Participate</a>
		<a class="btn variant-filled-tertiary" href="https://kit.svelte.dev/">Volunteer</a>
	</section>
</div>
