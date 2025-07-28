<script>
    import Article from '$lib/blocks/article.svelte';
    import memo from '$lib/images/memo-lime.jpg';
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="Learn more about Angelina Flores." />
</svelte:head>

<Article class="m-4 mx-auto max-w-2xl" tag="main">
    <img
        class="float-right !m-4 inline max-w-24 rounded-lg shadow-xs"
        src={memo}
        alt="A sleeping kitty holding a slime of lime."
    />
    <h1>About</h1>
    <p>I'm a Unity software/game developer and web developer.</p>
    <p>
        Right now, I'm working with the Center for Crime Science and Violence Prevention at SIUE on
        an immersive VR law training simulation.
        <a class="text-nowrap" href="https://www.siue.edu/ccsvp/">Learn more about CCSVP.</a>
    </p>

    <ul
        class="p-0 text-center [&>li]:inline [&>li]:after:content-['_•_'] [&>li]:last:after:content-['']"
    >
        <li><a href="mailto:angel@nibli.net">angel@nibli.net</a></li>
        <li><a href="https://github.com/niblicat">Github</a></li>
        <li><a href="https://www.linkedin.com/in/dev-flores/">LinkedIn</a></li>
    </ul>
</Article>
