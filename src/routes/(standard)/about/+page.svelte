<script>
    import Article from '$lib/blocks/article.svelte';
    import article from '$lib/data/articles/about.md?raw';
</script>

<svelte:head>
    <title>About Me</title>
    <meta name="description" content="Learn more about Angelina Flores." />
</svelte:head>

<Article class="m-4 mx-auto max-w-4xl" raw={article} tag="main" />
