<script lang="ts">
    import { DarkLight } from '$lib/components/ui/darklight';
    import Drawer from './drawer.svelte';
    import Navigation from './navigation.svelte';

    let width = $state(0);
</script>

<svelte:window bind:innerWidth={width} />


<header>
    <div class="fixed top-8 right-0 left-0 z-50 px-2 sm:px-8">
        <div
            class="z-50 mx-8 md:mx-auto flex max-w-5xl flex-wrap justify-between gap-4 rounded-lg bg-(--secondary) px-2 py-2 sm:px-8"
        >
            <!-- TODO: Create a cool logo here -->
            <p class="my-auto text-4xl font-thin"><a href="/">Nibli</a></p>

            <div class="flex justify-end gap-4">
                {#if width < 700}
                    <Drawer />
                {:else}
                    <Navigation />
                {/if}
                <DarkLight />
            </div>
        </div>
    </div>
</header>
