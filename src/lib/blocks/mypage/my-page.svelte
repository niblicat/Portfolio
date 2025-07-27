<script lang="ts" module>
    import type { BodyContainerProps } from '$lib/utilities/props';
    import { cn } from '$lib/utils';
</script>

<script lang="ts">
    interface Props extends BodyContainerProps {
        mainClass?: string;
    }

    let {
        header,
        footer,
        class: className,
        mainClass,
        children,
        ref = $bindable(null),
        ...restProps
    }: Props = $props();
</script>

<!--
@component
My Page is a wrapper for the header, main, and footer of your website.
Make sure to pass in snippets when desired for the header and footer, rather
than leaving them as children of My Page.

Anything passed as a child to My Page will be wrapped within a main element.

The header and footer will be inserted outside of the width spacing wrapper,
so they are free to fit the full width of the page.
-->

<div data-slot="my-page" class={cn('z-0', className)} bind:this={ref} {...restProps}>
    {@render header?.()}
    <main class={mainClass}>
        {@render children?.()}
    </main>
    {@render footer?.()}
</div>
