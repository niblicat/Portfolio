<script lang="ts" module>
    import Header from "../header/header.svelte";
</script>

<script lang="ts">
    interface Props {
        children?: any
        useHeader?: boolean
    }
    let { children, useHeader = true }: Props = $props();
</script>

<div data-slot="my-page" class="w-full overflow-x-hidden">
    {#if useHeader}
        <div class="mx-auto mt-24 min-h-svh w-full max-w-7xl p-4">
            <Header />
            {@render children?.()}
        </div>
    {:else}
        <div class="mx-auto min-h-svh w-full max-w-7xl p-4">
            {@render children?.()}
        </div>
    {/if}
</div>