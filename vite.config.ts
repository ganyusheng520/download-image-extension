import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import mpaPlugin from 'vite-plugin-mpa';
// @ts-expect-error
const mpa = mpaPlugin.default;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // mpa(),
    ],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'index.html'),
                download: resolve(__dirname, 'download/index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
