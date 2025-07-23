<script lang="ts" module>
    import type { Snippet } from 'svelte';
    import Header from '../header.svelte';
</script>

<script lang="ts">
    interface Props {
        children?: Snippet;
        secondary?: Snippet;
        useHeader?: boolean;
    }
    let { children, secondary, useHeader = true }: Props = $props();
</script>

<div data-slot="my-page" class="z-10 w-full overflow-x-hidden">
    {#if useHeader}
        <div class="mx-auto mt-16 max-w-7xl p-4 sm:mt-18">
            <Header>
                {@render secondary?.()}
            </Header>
            {@render children?.()}
        </div>
    {:else}
        <div class="mx-auto max-w-7xl p-4">
            {@render children?.()}
        </div>
    {/if}
</div>
