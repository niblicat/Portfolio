<script lang="ts">
    import { DarkLight } from '$lib/components/ui/darklight';
    import type { Snippet } from 'svelte';
    import Drawer from '../drawer.svelte';
    import Navigation from '../navigation.svelte';
    import type { ChildrenProps, StandardProps } from '$lib/utilities/props';
    import { cn } from '$lib/utils';


    let {
        class: className,
        ref = $bindable(null),
        children,
        ...restProps
    }: StandardProps = $props();

    let width = $state(0);
</script>

<svelte:window bind:innerWidth={width} />

<header data-slot="header" class="fixed top-4 right-0 left-0 z-50 px-2 sm:top-8 sm:px-8">
    <div
        class="bg-secondary shadow-secondary/50 z-50 mx-2 flex max-h-16 max-w-5xl flex-wrap justify-between gap-4 rounded-lg px-2 py-2 shadow-md sm:px-8 md:mx-auto"
    >
        {@render children?.()}

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
</header>
