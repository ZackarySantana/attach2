<script>
	import '../app.postcss';
</script>

<div class="light-fire max-w-[500px] mx-auto">
	<header class="flex justify-center items-center py-4">
		<a
			href="https://github.com/ZackarySantana/Attach2"
			target="_blank"
			class="text-attach-accent font-mono text-sm"
		>
			|attach|
		</a>
	</header>

	<main class="px-4">
		<slot />
	</main>

	<footer class="px-5 sm:px-10 flex justify-center items-center py-8">
		<a href="https://github.com/ZackarySantana/Attach2" target="_blank">
			<p class="text-sm">
				Putting the power of connecting in to the hands of the user.
				<br />
				Theme: <code>Light Fire</code>
			</p>
			<h3>
				Click here to make your own <span class="text-attach-accent font-mono">|attach|</span>
			</h3>
		</a>
	</footer>
</div>
