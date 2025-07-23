<script lang="ts">
    import { cn } from '$lib/utils';

    import { onMount, type Snippet } from 'svelte';

    interface Props {
        raw?: string;
        tag?: string;
        class?: string;
        children?: Snippet;
    }

    let article: string | undefined = $state('');

    let { raw, tag = 'div', class: className, children, ...restProps }: Props = $props();

    onMount(async () => {
        const showdown = await import('showdown');
        const { Converter } = showdown.default;

        const converter = new Converter();

        if (raw) {
            article = converter.makeHtml(raw);
        }
    });
</script>

<svelte:element
    this={tag}
    class={cn(
        'prose prose-slate dark:prose-invert bg-background inset-shadow-secondary mx-4 my-4 max-w-4xl rounded-lg border px-6 py-6 inset-shadow-sm sm:mx-8 sm:px-8 md:mx-auto ',
        className
    )}
    {...restProps}
>
    {#if article}
        {@html article}
    {:else}
        {@render children?.()}
    {/if}
</svelte:element>
