<script lang="ts">
    import type { StandardProps } from '$lib/utilities/props';
    import { cn } from '$lib/utils';

    interface Props extends StandardProps {
        /** The link to the home page. */
        href?: string;
    }

    let {
        href = '/',
        class: className,
        ref = $bindable(null),
        children,
        ...restProps
    }: Props = $props();
</script>

<a {href} class={cn('flex items-center justify-baseline gap-2', className)} {...restProps}>
    {#if typeof children == 'string'}
        {children}
    {:else}
        {@render children?.()}
    {/if}
</a>
