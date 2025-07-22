<script lang="ts">
    import Article from '$lib/blocks/header/article.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import articleRaw from '$lib/data/articletemp.md?raw';
</script>

<Article raw={articleRaw} />
