<script lang="ts">
    import Article from '$lib/blocks/article.svelte';
    import articleRaw from '$lib/data/articles/temp.md?raw';
</script>

<svelte:head>
    <title>Angelina Flores' Portfolio</title>
    <meta
        name="description"
        content="Angelina Flores is a software developer who has worked on a variety of personal and professional projects."
    />
</svelte:head>

<Article class="m-4 mx-auto max-w-4xl" raw={articleRaw} tag="section"></Article>
