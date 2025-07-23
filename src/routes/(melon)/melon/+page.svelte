<script>
    import Article from '$lib/blocks/header/article.svelte';
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

<div class="my-4 flex flex-row justify-center gap-4 *:h-16 sm:*:h-18">
    <Button
        variant="badge"
        size="lg"
        href="https://apps.apple.com/us/app/melon-merge-3d/id6708230921"
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
    >
        <img src={imageGooglePlay} alt="Get it on Google Play" class="h-full object-cover" />
    </Button>
</div>
