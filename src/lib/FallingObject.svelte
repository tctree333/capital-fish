<script lang="ts">
	import { sniped, autosnipe, bigBoiBoundingBox } from '$lib/data';

	import { fallingItems } from '$lib/gameConfig';

	export let x: number;
	export let y: number;
	export let rotate: number;
	export let size: number;
	export let objectType: boolean;

	let caught = false;
	let autosniped = false;
	$: {
		if (y === -20) {
			caught = false;
			autosniped = false;
		}
	}

	const catchObject = (): void => {
		if (!caught) {
			sniped.increment();
			caught = true;
		}
	};

	const tryAutosnipe = (): void => {
		if (!autosniped && Math.random() <= $autosnipe) {
			catchObject();
		}
		autosniped = true;
	};

	let viewportWidth = 0;
	let viewportHeight = 0;
	let pxX = 0;
	let pxY = 0;
	$: pxX = (x / 100) * viewportWidth;
	$: pxY = (y / 100) * viewportHeight;

	$: {
		let overlap = !(
			pxX + size < $bigBoiBoundingBox.left ||
			pxX > $bigBoiBoundingBox.right ||
			pxY + size < $bigBoiBoundingBox.top ||
			pxY > $bigBoiBoundingBox.bottom
		);

		if (overlap) {
			tryAutosnipe();
		}
	}
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<div on:mousedown={catchObject} tabindex="-1" on:mouseover={tryAutosnipe}>
	<svg
		class="fixed {caught ? '' : 'hover:ring-4 cursor-pointer ring-red-400'}"
		style="left: {x}%; top: {y}%; --rotation: {rotate}deg; {caught
			? ''
			: 'transform: rotate(var(--rotation))'}"
		width={size.toString()}
		height={size.toString()}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 36 36"
	>
		{#if caught}
			<path
				fill="#DD2E44"
				d="M21.533 18.002L33.768 5.768c.976-.976.976-2.559 0-3.535-.977-.977-2.559-.977-3.535 0L17.998 14.467 5.764 2.233c-.976-.977-2.56-.977-3.535 0-.977.976-.977 2.559 0 3.535l12.234 12.234L2.201 30.265c-.977.977-.977 2.559 0 3.535.488.488 1.128.732 1.768.732s1.28-.244 1.768-.732l12.262-12.263 12.234 12.234c.488.488 1.128.732 1.768.732.64 0 1.279-.244 1.768-.732.976-.977.976-2.559 0-3.535L21.533 18.002z"
			/>
		{:else if objectType}
			<g>{@html fallingItems.item1}</g>
		{:else}
			<g>{@html fallingItems.item2}</g>
		{/if}
	</svg>
</div>
