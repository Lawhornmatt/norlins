<script>
	import markdownit from 'markdown-it';
	const md = markdownit();
	import storytext from '../../content/A1_Intro.md?raw';

	// Reset all game values entering this page, e.g. when starting over
	import { reset_state } from '$lib/drink_mechanics';
	reset_state();
</script>

<div class="card variant-ghost-surface flex flex-col grow justify-around p-4 w-full h-full lg:m-3">
	<header class="text-2xl card-header font-semibold mb-2">
		The Story Begins
	</header>
	<hr>
	<section class="p-4">
		<article class="mb-4">
			{@html md.render(storytext)}
		</article>
	</section>
	<hr>
	<nav class="w-full flex justify-center">
		<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/B1" data-sveltekit-preload-data="false">Lets Begin</a>
	</nav>
</div>

