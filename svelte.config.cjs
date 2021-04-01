const sveltePreprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-vercel')
const pkg = require('./package.json')

module.exports = {
    preprocess: sveltePreprocess({
        postcss: true,
        defaults: {
            style: 'postcss',
        },
    }),
    kit: {
        adapter: adapter({ out: 'public' }),
        target: '#svelte',

        vite: {
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {}),
            },
        },
    },
}
