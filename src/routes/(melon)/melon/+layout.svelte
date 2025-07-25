<script lang="ts">
    import { MyPage } from '$lib/blocks/mypage';
    import Banner from '$lib/blocks/banner.svelte';
    import imageLogo from '$lib/images/merge-logo-2.png';
    import * as Header from '$lib/blocks/header';
    import type { ChildrenProps } from '$lib/utilities/props';

    let { children }: ChildrenProps = $props();

    let width = $state(0);
</script>

<svelte:window bind:innerWidth={width} />

{#snippet logo()}
    {#if !children || width >= 640}
        Angelina Flores
    {/if}
    <div class="recessed max-h-12 max-w-28 rounded-lg p-1">
        <img class="object-contain" src={imageLogo} alt="Melon Merge 3D logo" />
    </div>
{/snippet}

<!-- Import from static since dynamic imports won't work with toImageUrl() -->
<Banner image="/images/melon-banner.png" />

<MyPage class="flex min-h-lvh flex-col pt-14 sm:pt-18">
    {#snippet header()}
        <Header.Root class="fixed top-0 right-0 left-0 mt-4 sm:mt-8">
            <Header.Logo class="text-2xl font-thin sm:text-3xl md:text-4xl">
                {@render logo()}
            </Header.Logo>
            <!-- This allows the header to react to flex row changes -->
            {#snippet navigation(wrapped: boolean)}
                <Header.Nav useDrawer={wrapped} />
            {/snippet}
        </Header.Root>
    {/snippet}

    {@render children()}

    {#snippet footer()}
        <!-- Don't make footer colors extend beyond page due to overscroll -->
        <footer class="mt-auto bg-red-500/50">
            footer
            <br />
            footer
        </footer>
    {/snippet}
</MyPage>
