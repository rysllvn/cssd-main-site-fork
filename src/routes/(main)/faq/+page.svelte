<script lang="ts">
	import { questionAndAnswers } from '$lib/copy/faq';
</script>

<header class="flex flex-col gap-2">
	<h1 class="h1 mb-8">Frequently Asked Questions</h1>
	<p class="prose-xl">
		Question not answered here? Email <a class="anchor" href="email:toinfo@challengedsailors.org"
			>info@challengedsailors.org</a
		> with your particular need and we’ll get back to you ASAP!
	</p>
</header>
<hr />

<ul class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
	{#each questionAndAnswers as { question, answer }}
		<li class="flex flex-col gap-2">
			<p class="prose-lg text-black card p-2 bg-surface-300 w-fit shadow">
				{question}
			</p>
			<p class="prose-lg card p-2 variant-filled-primary w-fit shadow">{answer}</p>
		</li>
	{/each}
</ul>
