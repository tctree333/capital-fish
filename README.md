# Capital Fish
An incremental/idle game about catching fish.

## About
This game was originally developed as a joke for a group of friends. It came out a lot better than I expected, so I decided to re-theme the game to publish.

[Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) was used, with [Tailwind CSS](https://tailwindcss.com/) for styles. This was my first time using Svelte, and I really enjoyed it! It also means my code is a little bit all over the place, especially since the bulk of the work was done in an afternoon. I also never used TypeScript before, and I'm not really sure what's going on. Seems cool though.

## Configuration/Theming
This game is re-themed from the original, which means you can re-theme/configure the game too!

Game configuration is set in `src/lib/gameConfig.ts`. The definition of a `storeItem` is at the top so you can tweak the store items to your liking. You can also change the titles, text, and SVGs, or add/remove/change items in the store. I have not spent much time tuning the game balance, so you may want to tweak the store values.

Images are located in the `static/` folder, which will be built to the root of the site. Image assets (for the store or big mouse) are located in `static/assets/`.

SvelteKit is currently configured with the Netlify adapter. I'm not sure if it's actually server rendering anything, so the static adapter would probably work too. To change the adapter, install it and configure `svelte.config.cjs`.