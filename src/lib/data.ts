import { writable } from 'svelte/store';

const clickedWriteable = writable(0);
const snipedWritable = writable(0);
const cpsWritable = writable(0);
const autosnipeWritable = writable(0);

export const biggerBoi = writable(false);

export const bigBoiBoundingBox = writable({
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
});

export const clicked = {
	subscribe: clickedWriteable.subscribe,
	increment: (num = 1): void => {
		clickedWriteable.update((n) => n + num);
	},
	decrement: (num = 1): void => {
		clickedWriteable.update((n) => n - num);
	},
	reset: (): void => {
		clickedWriteable.set(0);
	}
};

export const sniped = {
	subscribe: snipedWritable.subscribe,
	increment: (num = 1): void => {
		snipedWritable.update((n) => n + num);
		clickedWriteable.update((n) => n + num);
	},
	decrement: (num = 1): void => {
		snipedWritable.update((n) => n - num);
	},
	reset: (): void => {
		snipedWritable.set(0);
	}
};

export const cps = {
	subscribe: cpsWritable.subscribe,
	increment: (num = 1): void => {
		cpsWritable.update((n) => n + num);
	},
	decrement: (num = 1): void => {
		cpsWritable.update((n) => n - num);
	},
	multiply: (num = 1): void => {
		cpsWritable.update((n) => n * num);
	},
	reset: (): void => {
		cpsWritable.set(0);
	}
};

export const autosnipe = {
	subscribe: autosnipeWritable.subscribe,
	multiply: (num = 1): void => {
		autosnipeWritable.update((n) => n * num);
	},
	init: (num: number): void => {
		autosnipeWritable.set(num);
	},
	reset: (): void => {
		autosnipeWritable.set(0);
	}
};
