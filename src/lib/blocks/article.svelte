<script lang="ts">
    import { onMount } from 'svelte';
    import type { StandardProps } from '$lib/utilities/props';
    import { cn } from '$lib/utils';

    interface Props extends StandardProps {
        /** Raw article contents as string. */
        raw?: string;
        /** The tag of the HTML elementin which the article
         * should be contained. */
        tag?: string;
    }

    let article: string | undefined = $state('');

    let {
        raw,
        tag = 'div',
        class: className,
        children,
        ref = $bindable(null),
        ...restProps
    }: Props = $props();

    onMount(async () => {
        // Doesn't import through normal means
        const showdown = await import('showdown');
        const { Converter } = showdown.default;

        const converter = new Converter();

        if (raw) {
            article = converter.makeHtml(raw);
        }
    });
</script>

<!-- 
@component
Articles can be used to display standard HTML article content.
Alternatively, if you pass a markdown-formatted string into the raw attribute,
it will render as HTML. Do not pass in user-generated content without
sanitizing it.

Specifying a value for the raw attribute and providing children will prefer
the raw attribute.
-->

<svelte:element
    this={tag}
    class={cn(
        'prose prose-slate dark:prose-invert bg-background inset-shadow-secondary mx-4 my-4 max-w-4xl rounded-lg border px-6 py-6 inset-shadow-sm sm:mx-8 sm:px-8 md:mx-auto ',
        className
    )}
    {...restProps}
    bind:this={ref}
>
    {#if article}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html article}
    {:else}
        {@render children?.()}
    {/if}
</svelte:element>
