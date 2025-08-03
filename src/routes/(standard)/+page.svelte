<script lang="ts">
    import Article from '$lib/blocks/article.svelte';
    import Experience from '$lib/blocks/experience.svelte';
    import memo from '$lib/images/memo-lime.jpg';
</script>

<svelte:head>
    <title>Angelina Flores' Portfolio</title>
    <meta
        name="description"
        content="Angelina Flores is a software developer who has worked on a variety of personal and professional projects."
    />
</svelte:head>

<section id="about" class="prose prose-slate dark:prose-invert basis-full rounded-none sm:px-32 p-8 bg-foreground/5 inset-shadow-secondary/50 overflow-hidden w-full min-w-full scroll-my-24">
    <img
        class="float-right !m-4 inline max-w-24 rounded-lg shadow-xs"
        src={memo}
        alt="A sleeping kitty holding a slime of lime."
    />

    <h1 class="mt-0">About</h1>

    <p>I'm a software engineer and web developer.</p>

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
</section>

<div class="mx-4 md:mx-8">
    <Experience />

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
</div>
