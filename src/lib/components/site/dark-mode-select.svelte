<script lang="ts">
    import Sun from '@nick-mazuk/ui-svelte/src/elements/icon/sun.svelte'
    import Moon from '@nick-mazuk/ui-svelte/src/elements/icon/moon.svelte'
    import Monitor from '@nick-mazuk/ui-svelte/src/elements/icon/monitor.svelte'
    import Select from '@nick-mazuk/ui-svelte/src/form/select/select.svelte'

    import { darkMode } from '../../stores/dark-mode'
</script>

<Select on:change="{(event) => darkMode.set(event.detail)}" value="{$darkMode}">
    <svelte:fragment slot="prefix">
        {#if $darkMode === 'light'}
            <Sun />
        {:else if $darkMode === 'dark'}
            <Moon />
        {:else}
            <Monitor />
        {/if}
    </svelte:fragment>
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
</Select>
