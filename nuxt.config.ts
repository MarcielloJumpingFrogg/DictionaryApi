// https://nuxt.com/docs/api/configuration/nuxt-config
//
//
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ["@nuxthub/core", "@nuxthub/core"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  
  css: ['~/assets/style.css'],
  vite: {
    plugins: [tailwindcss()],
  },


	hub: {
		db: "sqlite"
	},

	nitro: {
		storage: {
			redis: {
				driver: "redis",
				port: 6379,
				host: '127.0.0.1',
			
			}
		},
	}
	
});
