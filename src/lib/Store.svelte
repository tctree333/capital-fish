<script lang="ts">
	import { browser } from '$app/env';

	import { clicked, sniped, cps, autosnipe, biggerBoi } from '$lib/data';
	import { onDestroy, onMount } from 'svelte';

	import { text, storeItems } from '$lib/gameConfig';
	const { clickName, snipeName } = text;

	let currentTick;
	let tps = 1;
	let cpt = 1;

	$: {
		if ($cps > 0) {
			tps = Math.min(20, $cps);
			cpt = Math.round($cps / tps);
			clearInterval(currentTick);
			currentTick = setInterval(() => {
				clicked.increment(cpt);
			}, 1000 / tps);
		}
		if (currentTick && $cps === 0) {
			clearInterval(currentTick);
		}
	}

	const buy = (index, free = false) => {
		const i = storeItems[index];
		return () => {
			if (i.count >= i.max) return;
			if (!free) {
				if (i.costSnipes) {
					if (i.cost > $sniped) return;
					sniped.decrement(i.cost);
				} else {
					if (i.cost > $clicked) return;
					clicked.decrement(i.cost);
				}
			}
			switch (i.operation) {
				case 'linCps':
					cps.increment(i.multiplier);
					break;
				case 'expSnipe':
					if ($autosnipe === 0) {
						autosnipe.init(i.multiplier - 1);
					} else {
						autosnipe.multiply(i.multiplier);
					}
					break;
				case 'expCps':
					cps.multiply(i.multiplier);
					break;
				case 'bigBoi':
					biggerBoi.set(true);
					break;
			}
			storeItems[index].count++;
			storeItems[index].cost = Math.round(i.initialCost + Math.pow(i.count, 2) * i.costMultiplier);
		};
	};

	const sell = (index) => {
		let i = storeItems[index];
		return () => {
			if (i.count > 0 && i.sell > 0) {
				storeItems[index].count--;
				switch (i.operation) {
					case 'linCps':
						cps.decrement(i.multiplier);
						break;
					case 'expSnipe':
						if ($autosnipe <= i.multiplier - 1) {
							autosnipe.multiply(0);
						} else {
							autosnipe.multiply(1 / i.multiplier);
						}
						break;
					case 'expCps':
						cps.multiply(1 / i.multiplier);
						break;
					case 'bigBoi':
						biggerBoi.set(false);
						break;
				}
				if (i.costSnipes) {
					sniped.increment(i.sell);
				} else {
					clicked.increment(i.sell);
				}
			}
		};
	};

	onDestroy(() => {
		clearInterval(currentTick);
	});

	let checkedSave = false;
	onMount(() => {
		if (browser) {
			let savedStore = localStorage.getItem('store');
			if (savedStore) {
				let saveData = JSON.parse(savedStore);
				storeItems.forEach((item, index) => {
					let count = saveData[item.name];
					if (count) {
						const buyF = buy(index, true);
						Array(count).fill(0).forEach(buyF);
					}
				});
			}
			let savedClick = localStorage.getItem('clicked');
			if (savedClick) clicked.increment(Number(savedClick));
			let savedSnipe = localStorage.getItem('sniped');
			if (savedSnipe) sniped.increment(Number(savedSnipe));
			checkedSave = true;
		}
	});
	$: {
		if (browser && checkedSave) {
			let save = {};
			storeItems.forEach((item) => {
				save[item.name] = item.count;
			});
			localStorage.setItem('store', JSON.stringify(save));
			localStorage.setItem('clicked', $clicked.toString());
			localStorage.setItem('sniped', $sniped.toString());
		}
	}
	let resetConfirm = false;
	const reset = () => {
		if (resetConfirm) {
			cps.reset();
			autosnipe.reset();
			clicked.reset();
			sniped.reset();
			storeItems.forEach((v, i) => {
				storeItems[i].count = 0;
				storeItems[i].cost = v.initialCost;
			});
			resetConfirm = false;
		} else {
			resetConfirm = true;
			setTimeout(() => {
				resetConfirm = false;
			}, 5000);
		}
	};
</script>

<section
	class="text-left p-8 bg-white rounded-md mt-12 pb-1 lg:max-h-[80vh] lg:overflow-y-scroll tabular-nums"
>
	<div class="mb-6 border-b-2 pb-2 flex justify-between">
		<h2 class="font-medium text-3xl ">Store</h2>
		<button on:click={reset} class="text-lg font-medium underline"
			>{#if resetConfirm}
				Click again within 5 seconds to confirm reset.
			{:else}
				Reset Game
			{/if}
		</button>
	</div>
	{#each storeItems as item, index}
		<div class="md:flex justify-between items-center content-center mb-8">
			<div class="flex content-center items-center justify-start mb-2">
				<img
					src={item.image.src}
					alt={item.image.alt}
					width="96"
					height="96"
					class="rounded-md mr-4 ring-4 ring-blue-300"
				/>
				<div>
					<h2 class="text-2xl mb-0.75">
						{item.name}
					</h2>
					<p class="text-xl mb-1">{item.description}</p>
					<p class="text-md">
						{#if item.count >= item.max}
							MAX,
						{:else}
							Costs {item.cost} {item.costSnipes ? snipeName : clickName},
						{/if}
						Sells for {item.sell}
						{item.costSnipes ? snipeName : clickName}
					</p>
				</div>
			</div>
			<div class="flex content-center items-center md:justify-end justify-end">
				<p class="text-4xl mx-6 min-w-[2em] text-right">{item.count}</p>
				<div>
					<button
						on:click={buy(index)}
						disabled={item.cost > (item.costSnipes ? $sniped : $clicked) || item.count >= item.max}
						class="block transition rounded-lg text-3xl bg-blue-300 focus:outline-none disabled:opacity-30 disabled:bg-gray-300 disabled:cursor-not-allowed {item.cost >
							(item.costSnipes ? $sniped : $clicked) || item.count >= item.max
							? ''
							: 'active:ring-2 hover:bg-opacity-80 focus-visible:ring-2'} ring-offset-2 ring-blue-600 px-6 py-4"
						>Buy!</button
					>
					<button
						on:click={sell(index)}
						disabled={item.count === 0}
						class="block text-lg py-2 px-4 mx-auto disabled:opacity-30 underline disabled:cursor-not-allowed {item.count ===
							0 || item.sell === 0
							? ''
							: 'hover:no-underline'}">Sell</button
					>
				</div>
			</div>
		</div>
	{/each}
</section>
