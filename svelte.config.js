import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

export default {
    preprocess: [
        sveltePreprocess({
            postcss: true,
            defaults: {
                style: 'postcss',
            },
        }),
    ],
    kit: {
        adapter: adapter(),
        target: '#svelte',
        files: {
            assets: 'static',
            hooks: 'src/hooks',
            lib: 'src/lib',
            routes: 'src/routes',
            serviceWorker: 'src/service-worker',
            template: 'src/app.html',
        },
    },
}
