export interface storeItem {
	name: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	count: number;
	multiplier: number;
	operation: 'linCps' | 'expSnipe' | 'expCps' | 'bigBoi';
	cost: number;
	initialCost: number;
	costMultiplier: number;
	sell: number;
	costSnipes: boolean;
	max: number;
}

export const metadata = {
	title: 'Capital Fish!',
	description:
		'Catch fish for fun and profit! Trap them for easy gains, or spear them for great reward!',
	url: 'https://capitalfish.tomichen.com/',
	domain: 'capitalfish.tomichen.com',
	preview_image: {
		url: '/assets/CapitalFish.png',
		type: 'image/png',
		alt: 'a fish with a gold dollar sign and dollar bills sticking out'
	}
};

export const text = {
	header: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width="128"
    height="128"
    class="absolute inline-block align-middle transform -translate-x-32 -translate-y-10 -rotate-6"
    ><path fill="#FDD888" d="M31.898 23.938C31.3 17.32 28 14 28 14l-6-8h-8l-6 8s-1.419 1.433-2.567 4.275C3.444 18.935 2 20.789 2 23c0 1.448.625 2.742 1.609 3.655C3.233 27.357 3 28.147 3 29c0 1.958 1.136 3.636 2.775 4.456C7.058 35.378 8.772 36 10 36h16c1.379 0 3.373-.779 4.678-3.31C32.609 31.999 34 30.17 34 28c0-1.678-.834-3.154-2.102-4.062zM18 6c.55 0 1.058-.158 1.5-.416.443.258.951.416 1.5.416 1.657 0 4-2.344 4-4 0 0 0-2-2-2-.788 0-1 1-2 1s-1-1-3-1-2 1-3 1-1.211-1-2-1c-2 0-2 2-2 2 0 1.656 2.344 4 4 4 .549 0 1.057-.158 1.5-.416.443.258.951.416 1.5.416z"/><path fill="#BF6952" d="M24 6c0 .552-.447 1-1 1H13c-.552 0-1-.448-1-1s.448-1 1-1h10c.553 0 1 .448 1 1z"/><path fill="#67757F" d="M23.901 24.542c0-4.477-8.581-4.185-8.581-6.886 0-1.308 1.301-1.947 2.811-1.947 2.538 0 2.99 1.569 4.139 1.569.813 0 1.205-.493 1.205-1.046 0-1.284-2.024-2.256-3.965-2.592V12.4c0-.773-.65-1.4-1.454-1.4-.805 0-1.456.627-1.456 1.4v1.283c-2.116.463-3.937 1.875-3.937 4.176 0 4.299 8.579 4.125 8.579 7.145 0 1.047-1.178 2.093-3.111 2.093-2.901 0-3.867-1.889-5.045-1.889-.574 0-1.087.464-1.087 1.164 0 1.113 1.938 2.451 4.603 2.824l-.001.01v1.398c0 .772.652 1.4 1.456 1.4.804 0 1.455-.628 1.455-1.4v-1.398c0-.017-.008-.03-.009-.045 2.398-.43 4.398-1.932 4.398-4.619z"/></svg>
Capital Fish.`,
	button: 'Trap a fish!',
	infoDisplay: {
		clickCount: 'You have caught {#} fish!',
		snipeCount: '({#} speared)',
		cps: 'Catches per second: {#}',
		autoProb: 'Autospear probability: {#}%'
	},
	clickName: 'fish',
	snipeName: 'speared fish'
};

export const bigBoiSrc = '/assets/trident.svg';

export const fallingItems = {
	item1:
		'<path fill="#3B88C3" d="M32.153 24c0-1 1.523-6.212 3.047-7.735 1.522-1.523 0-3.166-1.523-3.166-3.405 0-9.139 6.901-9.139 10.901 0 5 5.733 10.424 9.139 10.424 1.523 0 3.046-1.404 1.523-2.928C33.677 29.974 32.153 26 32.153 24z"/><path fill="#3B88C3" d="M9.021 14.384c0-3.046 1.497-6.093 3.02-6.093 4.569 0 13.322 4.823 14.845 12.439 1.524 7.616-17.865-6.346-17.865-6.346zm4.854 18.278c1.523 1.523 4.57 3.047 7.617 3.047 3.046 0-3.111-4.189-1.523-6.092 2.18-2.617-6.094 3.045-6.094 3.045z"/><path d="M2.071 28.727c.761-2.285.19-3.935-1.143-5.584-1.333-1.651 3.872-1.904 5.585.381s5.713 6.281 2.158 6.22c-3.553-.065-6.6-1.017-6.6-1.017z"/><path fill="#55ACEE" d="M.168 23.488c.959.874 7.223 4.309 7.165 5.137-.058.828-2.279-.088-3.105-.279-1.485-.342-1.905-.598-2.317-.526-.84.321-.554 1.201-.242 1.704 1.498 2.61 7.286 4.662 12.16 4.662 8.412 0 16.802-7.615 16.802-10.662 0-3.046-9.345-10.663-17.757-10.663C4.483 12.86.18 18.922.168 23.488z"/><path d="M7 17c1.104 0 2 .894 2 2 0 1.105-.896 2-2 2-1.105 0-2-.896-2-2 0-1.106.895-2 2-2z"/><path fill="#269" d="M15.08 29.98c-.156 0-.314-.036-.462-.113-.49-.256-.679-.86-.423-1.35 1.585-3.034 2.218-5.768.154-9.243-.282-.475-.126-1.088.349-1.371.475-.283 1.088-.124 1.371.349 2.693 4.535 1.46 8.202-.102 11.191-.178.342-.527.537-.887.537z"/>',
	item2:
		'<path fill="#FFAC33" d="M8.231 10c6-8 14-10 18-10 1 0 1 1 0 1s-6 2-7 9-11 0-11 0zm-1 18c4 3 13 8 18 8 3 0 2-1 1-1s-9-3-10-7-9 0-9 0z"/><path fill="#FFCC4D" d="M35 9c-1.611 0-4.059 2.972-5.268 6.294-1.475-5.62-6.166-10.739-12.945-10.739-8.273 0-12.061 10.216-14.524 14.479-.629 1.091-4.091 1.034-.989 3.103-3.103 2.068.449 2.243 1.222 3.103 2.625 2.92 8.997 6.205 14.291 6.205 5.655 0 11.12-3.786 12.863-8.958C30.828 25.896 33.353 29 35 29c2.209 0-2-5.582-2-10s4.209-10 2-10z"/><g fill="#F4900C"><path d="M18.001 17.967c-.019.552.414 1.015.966 1.032l.034.001c.536 0 .98-.426.998-.967.201-6.065 5.758-8.816 6.35-9.092-.466-.525-.968-1.018-1.51-1.467-1.885 1.057-6.634 4.323-6.838 10.493zm5.018-2.163c-.108.542.243 1.068.784 1.177.067.013.132.019.198.019.467 0 .885-.329.98-.804.516-2.581 2.296-3.574 3.592-3.956-.305-.609-.645-1.202-1.028-1.768-1.877.691-3.908 2.246-4.526 5.332z"/><path d="M13 20c0 .553.448 1 1 1s1-.447 1-1c0-8.97 5.841-12.544 8.266-13.641-.693-.419-1.424-.785-2.205-1.067C17.888 7.169 13 11.446 13 20z"/></g><circle fill="#292F33" cx="9.5" cy="15.5" r="1.5"/>'
};

export const storeItems: storeItem[] = [
	{
		name: 'Old Man',
		description: 'Catches one fish every second.',
		image: {
			src: '/assets/fisher.jpg',
			alt: 'person fishing on body of water'
		},
		count: 0,
		multiplier: 1,
		operation: 'linCps',
		cost: 30,
		initialCost: 30,
		costMultiplier: 1.5,
		sell: 25,
		costSnipes: false,
		max: Infinity
	},
	{
		name: 'Big Boat',
		description: 'Catches four fish a second!',
		image: {
			src: '/assets/boat.jpg',
			alt: 'red and white boat on sea during daytime'
		},
		count: 0,
		multiplier: 4,
		operation: 'linCps',
		cost: 90,
		initialCost: 90,
		costMultiplier: 4,
		sell: 85,
		costSnipes: false,
		max: Infinity
	},
	{
		name: 'Laser Pointer',
		description: '20% chance of autospearing.',
		image: {
			src: '/assets/dart.jpg',
			alt: 'a dart sticks into the center of a dartboard'
		},
		count: 0,
		multiplier: 1.2,
		operation: 'expSnipe',
		cost: 40,
		initialCost: 40,
		costMultiplier: 1.2,
		sell: 35,
		costSnipes: true,
		max: 9
	},
	{
		name: 'Bigger Trident',
		description: 'Spear more fish at once!',
		image: {
			src: '/assets/fishing.jpg',
			alt: 'person holding black and silver fishing pole'
		},
		count: 0,
		multiplier: 0,
		operation: 'bigBoi',
		cost: 600,
		initialCost: 600,
		costMultiplier: 0,
		sell: 600,
		costSnipes: true,
		max: 1
	},
	{
		name: "Boats 'R' Us",
		description: 'Double your catches per second!',
		image: {
			src: '/assets/boats.jpg',
			alt: 'many fishing boats in the sea'
		},
		count: 0,
		multiplier: 2,
		operation: 'expCps',
		cost: 1200,
		initialCost: 1200,
		costMultiplier: 10,
		sell: 500,
		costSnipes: true,
		max: 10
	},
	{
		name: 'Trident',
		description: "You probably don't want to buy this...",
		image: {
			src: '/assets/question.jpg',
			alt: 'a black question mark written on a wall'
		},
		count: 0,
		multiplier: 0,
		operation: 'linCps',
		cost: 25000,
		initialCost: 25000,
		costMultiplier: 0,
		sell: 0,
		costSnipes: false,
		max: 1
	}
];
