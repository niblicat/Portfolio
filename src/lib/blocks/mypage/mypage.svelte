<script lang="ts" module>
    import Header from '../header/header.svelte';
</script>

<script lang="ts">
    interface Props {
        children?: any;
        useHeader?: boolean;
    }
    let { children, useHeader = true }: Props = $props();
</script>

{#if useHeader}
    <div data-slot="my-page" class="w-full overflow-x-hidden">
        <div class="mx-auto mt-[var(--top-margin)] max-w-7xl p-4">
            <Header />
            {@render children?.()}
        </div>
    </div>
{:else}
    <div data-slot="my-page" class="w-full overflow-x-hidden">
        <div class="mx-auto max-w-7xl p-4">
            {@render children?.()}
        </div>
    </div>
{/if}
