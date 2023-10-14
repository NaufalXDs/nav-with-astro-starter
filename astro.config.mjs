import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // projectRoot: '.',
    // pages: './src/pages',
    // dist: './dist',
    public: './public',
    buildOptions: {
        site: '',
        sitemap: false,
    },
    devOptions: {
        port: 3000,
        // tailwindConfig: '',
    },
    vite: {
        plugins: [
            /* Your Vite plugins go here... */
        ],
        resolve: {
            /* Vite aliases */
            define: {
                "global": {}
            },
        },
        optimizeDeps: {
            /* Dependency options */
            allowNodeBuiltins: true
        }
    }
});
