<script lang="ts">
    import { isFlexRowWrapped } from '$lib/element-operations';
    import type { StandardProps } from '$lib/utilities/props';
    import { cn } from '$lib/utils';
    import { onMount, tick, type Snippet } from 'svelte';

    interface Props extends StandardProps {
        navigation?: Snippet<[boolean]>;
    }

    let {
        navigation,
        class: className,
        ref = $bindable(null),
        children,
        ...restProps
    }: Props = $props();

    let clientWidth = $state(0);
    let wrapped = $state(false);

    $effect.pre(() => {
        void clientWidth;
        // This makes sure to set wrapped to false before we evaluate,
        // or else we will be calculating the child sizes using drawer
        // version of the header
        wrapped = false;
    });
    $effect(() => {
        void clientWidth;
        if (!!ref) wrapped = isFlexRowWrapped(ref);
    });
</script>

<!--
The Header is fixed to the top of the page, anchored to the same position
no matter where you scroll.

Make sure to add padding to the top of the main page content to accomodate
for the initial page appearance, or the top of the page will be hidden by
the header.
-->

<header
    class={cn(
        'bg-secondary shadow-secondary/50 pointer-events-auto z-50 mx-2 flex max-h-16 max-w-5xl flex-wrap justify-between gap-4 rounded-lg px-2 py-2 shadow-md sm:px-8 md:mx-auto',
        className
    )}
    bind:this={ref}
    bind:clientWidth
    {...restProps}
>
    {@render children?.()}
    {@render navigation?.(wrapped)}
</header>
