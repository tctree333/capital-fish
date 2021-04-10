<script lang="ts">
	// import { readable } from 'svelte/store';
	import { clicked, sniped, cps, autosnipe } from '$lib/data';
	import { text } from '$lib/gameConfig';
	const { infoDisplay } = text;
</script>

<section class="mb-12 text-xl tabular-nums font-medium">
	<p class="mb-2">
		{infoDisplay.clickCount.replace('{#}', $clicked.toString())}
	</p>
	<p class="mb-4 border-b-2 pb-4">
		{infoDisplay.snipeCount
			.replace('{#}', $sniped.toString())
			.replace('{s}', $sniped === 1 ? '' : 's')}
	</p>
	<p class="mb-2">
		{infoDisplay.cps.replace('{#}', $cps.toString())}
	</p>
	<p class="mb-4">
		{infoDisplay.autoProb.replace('{#}', Math.round($autosnipe * 100).toString())}
	</p>
</section>
