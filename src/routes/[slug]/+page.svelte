<script>
	import { drunkness, boozelist, drinkstate } from '$lib/drink_mechanics';
	import { afterNavigate } from '$app/navigation';

	// Brings in all data from page.js, most parsed from a markdown file 
	export let data;

	// Because whole page is not re-rendered, we want to re-eval drinkstate after every navigation.
	// If markdown frontmatter says this is a drinking part of story,
	// enter drinkstate and prevent navigation, forcing players to drink a drink
	afterNavigate(() => {
		if (data.drink[0] == true) { 
			$drinkstate = true;
		};
	});

	// Once player drinks the drink: update values and reset the state, allowing navigation
	function returnDrinkstate() {
		$drunkness = $drunkness + data.drink[3];
		$boozelist = $boozelist + data.drink[2];
		$drinkstate = false;
	};
</script>

<!-- Check to see if this is a "The End" page, i.e. the button takes you back to root -->
{#if (data.buttons[0] === "./")}
	<main class="card variant-ghost-warning p-4 sm:w-3/4 sm:h-full mb-5 lg:m-3">
		<header class="text-2xl card-header font-extrabold mb-2">
			{data.title}
		</header>
		<hr>
		<section class="p-4">
			<article class="mb-4">
				{@html data.content}
			</article>
		</section>
		<hr>

		<nav class="w-full flex justify-center space-x-8 pt-4">
			<a class="btn variant-filled-secondary rounded-xl min-w-[25%] my-5" href="/{data.buttons[0]}" data-sveltekit-preload-data="false">Start Over</a>
		</nav>
	</main>
{:else} <!-- All other non-ending pages -->
	<main class="card variant-ghost-surface p-4 sm:w-3/4 sm:h-full mb-5 sm:m-3">
		<header class="text-2xl card-header font-semibold mb-2">
			{data.title}
		</header>
		<hr>
		<section class="p-4">
			<article class="mb-4">
				{@html data.content}
			</article>
		</section>
		<hr>

		<nav class="w-full flex justify-center space-x-8 pt-4">
			<!-- Prevent moving forward if drink is waiting to be drunk -->
			{#if ($drinkstate)}
				{#each data.buttons as button, i}
					<div class="btn variant-filled-warning rounded-xl min-w-[25%] my-5" data-sveltekit-preload-data="false">Drink up first!</div>
				{/each}
			{:else}
				{#each data.buttons as button, i}
					<a class="btn variant-filled-primary rounded-xl min-w-[25%] my-5" href="/{button}" data-sveltekit-preload-data="false">Option {i}</a>
				{/each}
			{/if}
		</nav>
	</main>
{/if}

<!-- Drink-o-Meter -->
<aside class="card variant-ghost-tertiary flex flex-col p-4 sm:w-1/4 sm:h-full mb-5 sm:mb-0 lg:m-3">
	<header class="text-2xl sm:card-header font-semibold my-2 text-center">
		Drunk Level
		<p class="mt-1 mb-2 text-xs font-extralight">(this would be hidden but is here for dev)</p>
	</header>
	<hr>
	<p class="my-2 text-3xl sm:text-8xl font-bold text-center">{$drunkness}</p>
	<!-- Force the player to take a drink if drinkstate true, and display what theyve previously imbibed -->
	{#if $drinkstate == true}
		<p class="font-bold text-center mb-2">{data.drink[2]} Drink the {data.drink[1]}! {data.drink[2]}</p>
		<button type="button" class="btn variant-filled" on:click={returnDrinkstate}>Cheers!</button>
	{/if}
	{#if $boozelist != ''}
		<p class="font-bold text-center mt-2">You've drank: </p>
		<p class="font-bold text-center mt-2">{$boozelist}</p>
	{/if}
</aside>