import alpinejs from "@astrojs/alpinejs"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    site: "https://design.detik.com",
    vite: {
        build: {
            cssCodeSplit: false,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
    integrations: [
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
        alpinejs({ entrypoint: "/src/entrypoint" }),
    ],
    build: {
        assets: "_assets",
        inlineStylesheets: "never",
    },
    base: "/starter-project", //Change to your base path
    compressHTML: false,
    output: "static",
    outDir: "preview",
})
