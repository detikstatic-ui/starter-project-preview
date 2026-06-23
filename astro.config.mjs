import alpinejs from "@astrojs/alpinejs"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    site: "https://design.detik.com",
    vite: {
        build: {
            cssCodeSplit: false,
        },
        server: {
            proxy: {
                '^/(modules|widgets)/': {
                    target: 'https://design.detik.com',
                    changeOrigin: true,
                },
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
        plugins: [tailwindcss()],
    },
    integrations: [sitemap(), alpinejs({ entrypoint: "/src/entrypoint" })],
    build: {
        assets: "_assets",
        inlineStylesheets: "never",
    },
    base: "/starter-project", //Change to your base path
    compressHTML: false,
    output: "static",
    outDir: "preview",
})
