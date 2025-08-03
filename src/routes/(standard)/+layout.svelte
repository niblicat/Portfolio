<script lang="ts">
    import { MyPage } from '$lib/blocks/mypage';
    import * as Header from '$lib/blocks/header';
    import type { ChildrenProps } from '$lib/utilities/props';
    import { slide } from 'svelte/transition';
    import Footer from '$lib/blocks/footer.svelte';

    let { children }: ChildrenProps = $props();
</script>

{#snippet header()}
    <div class="pointer-events-none fixed top-0 right-0 left-0 p-4" in:slide>
        <Header.Root class="pointer-events-auto">
            <Header.Logo class="text-2xl font-thin sm:text-3xl md:text-4xl">
                Angelina Flores
            </Header.Logo>
            <!-- This allows the header to react to flex row changes -->
            {#snippet navigation(wrapped: boolean)}
                <Header.Nav useDrawer={wrapped} />
            {/snippet}
        </Header.Root>
    </div>
{/snippet}

<MyPage
    class="flex min-h-lvh w-full flex-col pt-24 [&_*]:scroll-my-24"
    mainClass="mx-4 md:mx-8"
    {header}
>
    {@render children()}
    {#snippet footer()}
        <Footer />
    {/snippet}
</MyPage>
