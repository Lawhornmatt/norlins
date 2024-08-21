<script>
	let drunklevel = 0;

	let boozemoji = '🥃';
	let cocktailmoji = '🍹';
	let winemoji = '🍷';
	let beermoji = '🍺';

	export let data;
</script>

<div class="card p-4 w-full h-full mb-5 lg:m-3">
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
	
	<div class="w-full flex justify-center">
		<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/B1" data-sveltekit-preload-data="false">Lets Begin</a>
	</div>
</div>

<!-- <button class="btn btn-primary" on:click={debugPageStore}>See page</button> -->