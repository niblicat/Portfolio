<script lang="ts">
    import { DarkLight } from '$lib/components/ui/darklight';
    import Drawer from '$lib/blocks/drawer.svelte';
    import Navigation from '$lib/blocks/navigation.svelte';
    import type { StandardProps } from '$lib/utilities/props';
    import { cn } from '$lib/utils';
    import { type Snippet } from 'svelte';

    interface Props extends StandardProps {
        drawer?: Snippet;
        navigation?: Snippet;
        darkLight?: Snippet;
        useDrawer?: boolean;
    }

    let {
        drawer,
        navigation,
        darkLight,
        useDrawer = $bindable(false),
        class: className,
        ref = $bindable(null),
        children,
        ...restProps
    }: Props = $props();
</script>

<!--
Header Nav adds a navigation bar and drawer to the header. By default, it
provides these for you. However, you can specify a navigation bar and drawer
to use if you desire.

When the viewport's width becomes small, the navigation bar will be
replaced with the drawer.
-->

<!-- Directory and Navigation -->
<div class={cn('flex items-center justify-end gap-2', className)} {...restProps}>
    {@render children?.()}
    {#if useDrawer}
        {#if drawer}
            {@render drawer()}
        {:else}
            <Drawer />
        {/if}
    {:else if navigation}
        {@render navigation()}
    {:else}
        <Navigation />
    {/if}

    {#if darkLight}
        {@render darkLight()}
    {:else}
        <DarkLight />
    {/if}
</div>
