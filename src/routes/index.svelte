<script context="module">
	export const prerender = true;
	export const router = false;
	// export const hydrate = false;
</script>

<script lang="ts">
	import BigBoi from '$lib/BigBoi.svelte';
	import ClickButton from '$lib/ClickButton.svelte';
	import InfoDisplay from '$lib/InfoDisplay.svelte';
	import FallingObjectManager from '$lib/FallingObjectManager.svelte';
	import Store from '$lib/Store.svelte';

	import { metadata, text } from '$lib/gameConfig';
	const { header } = text;
	const { title, description, url, domain, preview_image } = metadata;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}">

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:domain" content={domain} />
	<meta name="twitter:url" content={url} />

	<meta property="og:image" content={preview_image.url} />
	<meta property="og:image:type" content={preview_image.type} />
	<meta property="og:image:alt" content={preview_image.alt} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:image" content={preview_image.url} />
	<meta name="twitter:image:alt" content={preview_image.alt} />

	<meta name="twitter:dnt" content="on" />
	<meta name="pinterest" content="nopin" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
</svelte:head>

<main class="px-12 pt-12 mx-auto lg:flex max-w-7xl justify-between">
	<section class="max-w-2xl text-center lg:mx-0 mx-auto">
		<h1 class="mt-16 mb-32 text-6xl text-purple-800 font-medium">
			{@html header}
		</h1>

		<InfoDisplay />

		<ClickButton />
	</section>

	<div>
		<Store />
		<p class="float-right mt-4 mr-4 text-gray-600 mb-12">
			Open source on
			<a href="https://github.com/tctree333/capital-fish" class="underline hover:no-underline"
				>GitHub</a
			>.
		</p>
	</div>
</main>

<FallingObjectManager />
<BigBoi />

<style>
	main {
		user-select: none;
	}
</style>
