<script lang="ts">
	export let src: string;
</script>

<section
	class="grid w-full place-items-center bg-cover bg-center min-h-screen"
	style={`background-image: url(${src})`}
>
	<div class="flex flex-col items-center justify-center max-w-7xl gap-4 p-4">
		<slot />
	</div>
</section>
