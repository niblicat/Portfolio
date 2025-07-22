<script lang="ts" module>
    import Header from '../header/header.svelte';
</script>

<script lang="ts">
    interface Props {
        children?: any;
        secondary?: any;
        useHeader?: boolean;
    }
    let { children, secondary, useHeader = true }: Props = $props();
</script>

<div data-slot="my-page" class="z-10 w-full overflow-x-hidden">
    {#if useHeader}
        <div class="mx-auto mt-[var(--top-margin)] max-w-7xl p-4">
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
