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
			class="relative w-full h-[60px] flex items-center rounded-lg leading-5 px-4 bg-gray-100 select-none cursor-pointer"
			on:click={toggle}
		>
			<h1 class="font-bold whitespace-nowrap">{title}</h1>
			<Arrow class={`fill-accent ml-auto transition-all duration-[300ms] ${arrow_rotation}`} />
		</button>
		<div
			class="overflow-hidden transition-all duration-300"
			style={`max-height: ${open ? height : 0}px;`}
		>
			<div bind:clientHeight={height} class="flex flex-col gap-3 indent">
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
