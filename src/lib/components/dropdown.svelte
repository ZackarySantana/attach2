<script>
	import Arrow from '$lib/components/arrow.svelte';

	/** @type {string} */
	export let title;

	let open = false;
	let height = 1000;

	$: arrow_rotation = open ? 'rotate-[-90deg]' : 'rotate-[90deg]';

	function toggle() {
		open = !open;
	}
</script>

{#if $$slots.default}
	<section class="my-3">
		<button
			class="flex h-item w-full cursor-pointer select-none items-center rounded-lg px-4 leading-5 bg-primary"
			on:click={toggle}
		>
			<h1 class="whitespace-nowrap font-bold">{title}</h1>
			<Arrow class={`ml-auto transition-all duration-[300ms] fill-accent ${arrow_rotation}`} />
		</button>
		<div
			class="overflow-hidden transition-all duration-300"
			style={`max-height: ${open ? height : 0}px;`}
		>
			<div bind:clientHeight={height} class="indent flex flex-col gap-3">
				<slot />
			</div>
		</div>
	</section>

	<style>
		.indent {
			width: 95%;
			margin-left: 5%;
		}
	</style>
{/if}
