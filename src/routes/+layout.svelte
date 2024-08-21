<script>
	import '../app.postcss';
</script>

<div class="h-screen flex flex-col items-center lg:space-y-4 xl:space-y-8">

	<h1 class="h1 my-5 lg:my-10 font-mono">Sai's Spooky Storytime Sadventure</h1>

	<div class="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-5/6 lg:w-full md:h-auto">

		<slot />

	</div>
</div>
