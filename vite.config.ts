/// <reference types="vite/client" />
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["manifest.json"],
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,

            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 10,
                // 30 days in seconds
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      manifest: {
        name: "React-vite-app-pwa",
        short_name: "ReactPWA",
        description: "I am a simple vite app",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/PWA/icons-1.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "any",
          },
          {
            src: "/PWA/icons-2.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/PWA/bg-2.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/PWA/bg-1.png",
            sizes: "375x667",
            type: "image/png",
          },
        ],
        lang: "en",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});