<script lang="ts">
    import { MyPage } from '$lib/blocks/mypage';
    import * as Header from '$lib/blocks/header';
    import type { ChildrenProps } from '$lib/utilities/props';
    import { slide } from 'svelte/transition';

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

{#snippet footer()}
    <!-- Don't make footer colors extend beyond page due to overscroll -->
    <footer class="mt-auto bg-red-500/50">
        footer
        <br />
        footer
    </footer>
{/snippet}

<MyPage class="flex min-h-lvh w-full flex-col pt-24" mainClass="mx-4 md:mx-8" {header} {footer}>
    {@render children()}
</MyPage>
