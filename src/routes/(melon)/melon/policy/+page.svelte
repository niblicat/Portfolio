<script>
    import Article from '$lib/blocks/article.svelte';
    import article from '$lib/data/articles/policy.md?raw';
</script>

<Article class="m-4 mx-auto max-w-4xl" raw={article} />
