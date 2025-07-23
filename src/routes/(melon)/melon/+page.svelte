<script>
    import Article from '$lib/blocks/article.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import raw from '$lib/data/articles/melon.md?raw';
    import imageGooglePlay from '$lib/images/google-play.png';
</script>

<svelte:head>
    <title>Melon Merge 3D</title>
    <meta
        name="description"
        content="Melon Merge 3D is a mobile puzzle game available on the Android and iOS marketplaces."
    />
</svelte:head>

<Article tag="main" {raw}></Article>

<div
    class="mx-4 my-4 flex flex-row justify-center gap-2 *:h-12 sm:mx-8 sm:gap-4 sm:*:h-18 md:mx-auto md:justify-around"
>
    <Button
        variant="badge"
        size="lg"
        href="https://apps.apple.com/us/app/melon-merge-3d/id6708230921"
        class="p-0"
    >
        <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1730678400"
            alt="Download on the App Store"
            class="h-full object-cover"
        />
    </Button>
    <Button
        variant="badge"
        size="lg"
        href="https://play.google.com/store/apps/details?id=net.nibli.merge3d"
        class="p-0"
    >
        <img src={imageGooglePlay} alt="Get it on Google Play" class="h-full object-cover" />
    </Button>
</div>
