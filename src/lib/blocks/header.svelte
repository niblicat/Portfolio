<script lang="ts">
    import { DarkLight } from '$lib/components/ui/darklight';
    import Drawer from './drawer.svelte';
    import Navigation from './navigation.svelte';

    let width = $state(0);

    interface Props {
        children?: any;
    }

    let { children }: Props = $props();
</script>

<svelte:window bind:innerWidth={width} />

<header data-slot="header">
    <div class="fixed top-4 right-0 left-0 z-50 px-2 sm:top-8 sm:px-8">
        <div
            class="bg-secondary shadow-secondary/50 z-50 mx-2 flex max-h-16 max-w-5xl flex-wrap justify-between gap-4 rounded-lg px-2 py-2 shadow-md sm:px-8 md:mx-auto"
        >
            <a href="/">
                <div class="flex items-center justify-baseline gap-4">
                    <p class="text-4xl font-thin">Angelina Flores</p>
                    {@render children?.()}
                </div>
            </a>

            <div class="flex items-center justify-end gap-4">
                {#if width < 768}
                    <Drawer />
                {:else}
                    <Navigation />
                {/if}
                <DarkLight />
            </div>
        </div>
    </div>
</header>
