<script>

	let drunklevel = 0;
	let boozemoji = '🥃';
	let cocktailmoji = '🍹';
	let winemoji = '🍷';
	let beermoji = '🍺';

	import markdownit from 'markdown-it';
	const md = markdownit();
	import storytext from '$lib/storytext/I/I1.md?raw';

</script>

<div class="h-screen flex flex-col items-center lg:space-y-4 xl:space-y-8">

	<h1 class="h1 my-5 lg:my-10 font-mono">SPOOKY CHOOSE YOUR OWN</h1>

	<div class="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-5/6 lg:w-full md:h-auto">

		<div class="card p-4 w-3/4 h-full mb-5 lg:m-3">

			<header class="text-2xl card-header font-semibold mb-2">
				I1
			</header>

			<hr>

			<section class="p-4 flex justify-center">
				<article class="w-full h-32 mb-4">
					{@html md.render(storytext)}
				</article>
			</section>

			<hr>

			<div class="w-full flex justify-center">
				<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/B_level/C_level/D_level/E_level/F_level/G_level/H_level/I_level/Z_end/Z7">Continue</a>
			</div>
		</div>

		<div class="card p-4 w-1/4 h-full mb-5 lg:m-3">
			<header class="text-2xl card-header font-semibold my-2 text-center">
				Drunk Level
				<p class="mt-1 mb-2 text-xs font-extralight">(this would be hidden but is here for dev)</p>
			</header>
			<hr>

			<p class="mt-4 mb-2 text-8xl font-bold text-center">{drunklevel}</p>
			
		</div>
	</div>
</div>