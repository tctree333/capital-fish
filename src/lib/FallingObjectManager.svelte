<script lang="ts">
	import { onMount } from 'svelte';

	import FallingObject from './FallingObject.svelte';

	// falling object code adapted from https://svelte.dev/tutorial/congratulations
	let fallingObjects = new Array(20).fill(0).map(() => {
		return {
			x: Math.random() * 100,
			y: -20 - Math.random() * 100,
			size: 36 + Math.random() * 36,
			rotate: Math.random() * 360,
			objectType: Math.round(Math.random()) % 2 === 0
		};
	});

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			fallingObjects = fallingObjects.map((falling) => {
				falling.y += 0.01 * falling.size;
				falling.rotate += 0.05 * falling.size;
				falling.rotate = falling.rotate % 360;
				if (falling.y > 120) {
					falling.objectType = Math.round(Math.random()) % 2 === 0;
					falling.y = -20;
					falling.x = Math.random() * 100;
				}
				return falling;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="isolate" aria-hidden="true">
	{#each fallingObjects as c}
		<FallingObject {...c} />
	{/each}
</div>
