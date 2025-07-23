<script>
    import Article from '$lib/blocks/header/article.svelte';
    import article from '$lib/data/articles/about.md?raw';
</script>

<svelte:head>
    <title>About Me</title>
    <meta name="description" content="Learn more about Angelina Flores." />
</svelte:head>

<Article raw={article} tag="main" />
