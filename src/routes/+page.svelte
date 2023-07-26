<script lang="ts">
	import logo from '$lib/assets/cssd-logo.jpg';
</script>

<div id="background" class="w-full h-full">
	<div class="container w-full h-full max-w-screen-xl mx-auto mb-10 sm:py-10">
		<header
			id="header"
			class="mb-10 variant-glass-primary card card-hover w-full px-4 py-6 flex flex-col md:flex-row items-center gap-10"
		>
			<img class="w-64 md:w-96 rounded-lg" src={logo} alt="Challenged Sailors San Diego Logo" />
			<div class="flex flex-col gap-4 items-center">
				<h1 class="h1">Welcome!</h1>
				<hr />
				<p class="text-3xl italic">
					<strong>Our Mission</strong> is to provide therapeutic and recreational adaptive sailing opportunities
					for people with disabilities to enhance their dignity, well-being, and independence.
				</p>
				<a class="w-fit btn variant-filled-primary font-bold text-4xl" href="/go-sailing"
					>Go Sailing!</a
				>
			</div>
		</header>

		<section class="px-4 flex flex-col lg:flex-row items-center gap-4 justify-between lg:px-20">
			<div class="hidden md:flex variant-glass-primary p-2">
				<iframe
					style="border-radius: 6px;"
					width="800"
					height="450"
					src="https://www.youtube.com/embed/4nR5ijaMZWo"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>

			<div class="flex md:hidden variant-glass-primary p-2">
				<iframe
					style="border-radius: 6px;"
					width="400"
					height="225"
					src="https://www.youtube.com/embed/4nR5ijaMZWo"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
			<section class="card card-hover p-3 w-fit variant-glass-secondary flex flex-col text-white">
				<h2 class="h2 mb-2">Get Involved</h2>
				<hr />
				<p class="text-xl mb-3">Volunteers and donations are welcome and appreciated</p>
				<div>
					<a class="w-fit btn variant-filled-secondary" href="/volunteer">Volunteer</a>
					<a class="w-fit btn variant-filled-tertiary" href="/give">Give</a>
				</div>
			</section>
		</section>
		<section class="p-5 card variant-glass-primary mt-36 flex flex-col items-center">
			<h2 class="h2 mb-6">Sponsors</h2>

			<section class="grid grid-cols-2 md:grid-cols-3 gap-4">
				<div>
					<img
						class="h-auto max-w-full rounded-lg"
						src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-auto max-w-full rounded-lg"
						src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-auto max-w-full rounded-lg"
						src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
						alt=""
					/>
				</div>
				<section />
			</section>
		</section>
	</div>
</div>

<style>
	#background {
		background-image: url($lib/assets/all-boats.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
