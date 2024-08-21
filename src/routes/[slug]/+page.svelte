<script>
	let drunklevel = 0;

	export let data;
</script>

<div class="card p-4 w-3/4 h-full mb-5 lg:m-3">
	<header class="text-2xl card-header font-semibold mb-2">
		{data.title}
	</header>
	<hr>
	<section class="p-4 flex justify-center">
		<article class="w-full h-32 mb-4">
			{@html data.content}
		</article>
	</section>
	<hr>

	<div class="w-full flex justify-center space-x-8">
		{#each data.buttons as button, i}
			<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/{button}" data-sveltekit-preload-data="false">Option {i}</a>
		{/each}
	</div>
</div>

<!-- <button class="btn btn-primary bg-red-600" on:click={console.log(emptyArr)}>DEBUG</button> -->