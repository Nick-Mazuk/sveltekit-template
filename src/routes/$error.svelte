<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import { dev } from '$app/env'
    import Http404 from '@nick-mazuk/ui-svelte/src/errors/http-404/http-404.svelte'
    import Http500 from '@nick-mazuk/ui-svelte/src/errors/http-500/http-500.svelte'

    export let status: number
    export let error: Error
</script>

{#if status === 404}
    <Http404
        message="Looks like the page you're looking for doesn't exist. This is just as frustrating as another Finale bug!"
        links="{[
            { href: '/', text: 'Home' },
            { href: '/docs/getting-started', text: 'Docs' },
        ]}"
    />
{:else}
    <Http500 status="{status}" error="{error}" isDevelopment="{dev}" />
{/if}
