<script lang="ts">
    import Article from '$lib/blocks/article.svelte';
    import memo from '$lib/images/memo-lime.jpg';
</script>

<svelte:head>
    <title>Angelina Flores' Portfolio</title>
    <meta
        name="description"
        content="Angelina Flores is a software developer who has worked on a variety of personal and professional projects."
    />
</svelte:head>

<Article class="m-4 mx-auto max-w-2xl" tag="section">
    <h1>Welcome to my portfolio website</h1>

    <p>
        This website is currently being developed as of 21 July 2025. While you're here, feel free
        to check out some of my other projects!
        <a class="text-nowrap" href="/melon">Check out my mobile game, Melon Merge 3D</a>.
    </p>
</Article>

<Article id="about" class="m-4 mx-auto max-w-2xl scroll-my-24" tag="section">
    <img
        class="float-right !m-4 inline max-w-24 rounded-lg shadow-xs"
        src={memo}
        alt="A sleeping kitty holding a slime of lime."
    />
    <h2 class="mt-0">About</h2>
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

<Article class="m-4 mx-auto max-w-2xl" tag="section">
    <h2>Current Role</h2>

    <p>
        I am currently working at the Center for Crime Science and Violence Prevention at SIUE's
        Belleville campus as a Unity Software Engineer. Here, I primarily work on developing a
        virtual reality law enforcement training simulation with the goal of training officer
        patience and professionalism. I work with Unity, C#, .NET, and Google Cloud Platform.
    </p>

    <p>
        My main focus has been developing a robust dialog system that utilizes generative AI for NPC
        responses. This involves designing state machines, prompt engineering, and consuming REST
        APIs for generative AI, text-to-speech, and speech-to-text services.
    </p>
</Article>
