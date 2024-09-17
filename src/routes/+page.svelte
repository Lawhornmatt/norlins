<script>
	import markdownit from 'markdown-it';
	const md = markdownit();
	import storytext from '../../content/A1_Intro.md?raw';
</script>

<div class="card flex flex-col justify-around p-4 w-full h-96 lg:h-full mb-5 lg:m-3">
	<header class="text-2xl card-header font-semibold mb-2">
		The Story Begins
	</header>
	<hr>
	<section class="p-4">
		<article class="w-full h-32 mb-4">
			{@html md.render(storytext)}
		</article>
	</section>
	<hr>
	<div class="w-full flex justify-center">
		<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/B1" data-sveltekit-preload-data="false">Lets Begin</a>
	</div>
</div>

<!-- <button class="btn btn-primary" on:click={debugPageStore}>See page</button> -->