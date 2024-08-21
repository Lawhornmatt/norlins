<script>
	import { onMount } from 'svelte';
	import { page } from "$app/stores";
	let paramID = $page.params.slug;

	let drunklevel = 0;
	
	import markdownit from 'markdown-it';
	const md = markdownit();

	export let data;

	/* const content = import.meta.glob('/content/storytext/*.{md}');
	 console.log(JSON.stringify(content));
	let emptyArr = [];
	for (const [key, value] of Object.entries(content)) {
		const contentVal = value;
		emptyArr.push(contentVal);
	}
	console.log(content);
	console.log(emptyArr);
	*/
</script>

<div class="card p-4 w-3/4 h-full mb-5 lg:m-3">
	<header class="text-2xl card-header font-semibold mb-2">
		{data.id}
	</header>
	<hr>
	<section class="p-4 flex justify-center">
		<article class="w-full h-32 mb-4">
			{@html md.render(data.content)}
		</article>
	</section>
	<hr>
	<div class="w-full flex justify-center space-x-8">
		<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/C1" data-sveltekit-preload-data="false">Option 1</a>
		<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/C2" data-sveltekit-preload-data="false">Option 2</a>
		<!-- <button class="btn btn-primary bg-red-600" on:click={console.log(emptyArr)}>DEBUG</button> -->
	</div>
</div>