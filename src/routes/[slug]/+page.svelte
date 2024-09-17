<script>
	import { drunkness } from '$lib/drunkness';
	import { boozelist } from '$lib/boozelist';
	import { drinkstate } from '$lib/drinkstate';
	import { afterNavigate } from '$app/navigation';
	export let data;

	afterNavigate(() => setDrinkstate());


	function setDrinkstate() {
		if (data.drink[0] == true) { 
			$drinkstate = true;
		};
	};

	function returnDrinkstate() {
		$drunkness = $drunkness + data.drink[3];
		$boozelist = $boozelist + data.drink[2];
		$drinkstate = false;
	};
</script>

<main class="card p-4 w-3/4 h-full mb-5 lg:m-3">
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
		{#if ($drinkstate)}
			{#each data.buttons as button, i}
				<div class="btn variant-filled-warning rounded-xl min-w-[25%] my-5" data-sveltekit-preload-data="false">Drink up first!</div>
			{/each}
		{:else}
			{#each data.buttons as button, i}
				<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/{button}" data-sveltekit-preload-data="false">Option {i}</a>
			{/each}
		{/if}
	</div>
</main>

<aside class="card flex flex-col p-4 w-1/4 h-full mb-5 lg:m-3">
	<header class="text-2xl card-header font-semibold my-2 text-center">
		Drunk Level
		<p class="mt-1 mb-2 text-xs font-extralight">(this would be hidden but is here for dev)</p>
	</header>
	<hr>
	<p class="mt-4 mb-2 text-8xl font-bold text-center">{$drunkness}</p>
	{#if $drinkstate == true}
		<p class="font-bold text-center mb-2">{data.drink[2]} Drink the {data.drink[1]}! {data.drink[2]}</p>
		<button type="button" class="btn variant-filled" on:click={returnDrinkstate}>Cheers!</button>
	{/if}
	{#if $boozelist != ''}
		<p class="font-bold text-center mt-2">You've drank: {$boozelist}</p>
	{/if}
</aside>