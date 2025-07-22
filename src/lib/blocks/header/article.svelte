<script lang="ts">
    import { cn } from '$lib/utils';
    import Showdown from 'showdown';

    const { Converter } = Showdown;
    const converter = new Converter();

    interface Props {
        raw: string;
        class?: string;
    }

    let { raw, class: className, ...restProps }: Props = $props();

    let article = $state(converter.makeHtml(raw));
</script>

<main
    class={cn(
        'prose prose-slate dark:prose-invert mx-8 max-w-4xl rounded-lg border px-2 py-6 shadow-lg sm:px-8 md:mx-auto',
        className
    )}
    {...restProps}
>
    {@html article}
</main>
