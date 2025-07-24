<script lang="ts">
    import { DarkLight } from '$lib/components/ui/darklight';
    import type { Snippet } from 'svelte';
    import Drawer from './drawer.svelte';
    import Navigation from './navigation.svelte';
    import type { ChildrenProps } from '$lib/utilities/props';

    let width = $state(0);

    interface Props extends ChildrenProps {
        // logo: Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:window bind:innerWidth={width} />

<header data-slot="header">
    <div class="fixed top-4 right-0 left-0 z-50 px-2 sm:top-8 sm:px-8">
        <div
            class="bg-secondary shadow-secondary/50 z-50 mx-2 flex max-h-16 max-w-5xl flex-wrap justify-between gap-4 rounded-lg px-2 py-2 shadow-md sm:px-8 md:mx-auto"
        >
            <!-- Title and Project Badge -->
            <a href="/">
                <!-- TODO: Make this its own prop -->
                <div class="flex items-center justify-baseline gap-2">
                    {#if !children || width >= 640}
                        <p class="text-2xl font-thin sm:text-3xl md:text-4xl">Angelina Flores</p>
                    {/if}
                    {@render children?.()}
                </div>
            </a>

            <!-- TODO: Automatically detect when flex rows > 1 -->
            <!-- Directory and Navigation -->
            <div class="flex items-center justify-end gap-2">
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
