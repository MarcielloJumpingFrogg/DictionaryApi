import { defineEventHandler } from "nuxt/server";

export default defineEventHandler((event) => {
	return {
		hello: 'world',
	}
})
