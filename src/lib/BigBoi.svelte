<script lang="ts">
	import { clicked, bigBoiBoundingBox, biggerBoi } from '$lib/data';
	import { bigBoiSrc } from '$lib/gameConfig';

	let active = false;
	$: active = $clicked > 25000;

	let bigBoi: HTMLImageElement;

	let location = { x: 0, y: 0 };

	$: {
		if (!active) {
			bigBoiBoundingBox.set({
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			});
		}
	}

	function handleMousemove(event) {
		if (bigBoi) {
			bigBoiBoundingBox.set(bigBoi.getBoundingClientRect());
			location.x = event.clientX - $bigBoiBoundingBox.width / 2;
			location.y = event.clientY - $bigBoiBoundingBox.height / 2;
		}
	}
</script>

<svelte:body on:mousemove={handleMousemove} />

{#if active}
	<img
		bind:this={bigBoi}
		src={bigBoiSrc}
		width={$biggerBoi ? undefined : '128'}
		height={$biggerBoi ? undefined : '128'}
		class="fixed top-0 left-0"
		aria-hidden="true"
		alt=""
		style="transform: translate({location.x}px, {location.y}px); {$biggerBoi
			? 'width: 80%; height: 80%;'
			: ''}"
	/>
{/if}

<style>
	img {
		pointer-events: none;
	}
</style>
