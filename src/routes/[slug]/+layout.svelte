<script>

	let drunklevel = 0;
	let boozemoji = '🥃';
	let cocktailmoji = '🍹';
	let winemoji = '🍷';
	let beermoji = '🍺';

</script>

<slot></slot>

<div class="card p-4 w-1/4 h-full mb-5 lg:m-3">
	<header class="text-2xl card-header font-semibold my-2 text-center">
		Drunk Level
		<p class="mt-1 mb-2 text-xs font-extralight">(this would be hidden but is here for dev)</p>
	</header>
	<hr>
	<p class="mt-4 mb-2 text-8xl font-bold text-center">{drunklevel}</p>
	
</div>