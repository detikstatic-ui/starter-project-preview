import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import react from "@astrojs/react";

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
    integrations: [sitemap(), tailwind({
        applyBaseStyles: false,
    }), react()],
    build: {        
        assets: "_assets",
        inlineStylesheets: "never",
    },
    base: "/starter-project", //Change to your base path
    compressHTML: false,
    output: "static",
    outDir: "preview",
})