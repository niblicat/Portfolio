<script lang="ts">
    import { MyPage } from '$lib/blocks/mypage';
    import Banner from '$lib/blocks/banner.svelte';
    import type { Snippet } from 'svelte';
    import imageLogo from '$lib/images/merge-logo-2.png';
    import Header from '$lib/blocks/header.svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

{#snippet logo()}
    <div
        class="from-foreground/10 to-foreground/5 dark:from-foreground/5 dark:to-foreground/10 inset-shadow-ring max-h-12 max-w-28 rounded-lg bg-linear-to-b p-1 inset-shadow-xs"
    >
        <img class="object-contain" src={imageLogo} alt="Melon Merge 3D logo" />
    </div>
{/snippet}

{#snippet header()}
    <Header>
        {@render logo()}
    </Header>
{/snippet}

{#snippet footer()}
    <!-- Don't make footer colors extend beyond page due to overscroll -->
    <footer class="mt-auto bg-red-500/50">
        footer
        <br />
        footer
    </footer>
{/snippet}

<!-- Import from static since dynamic imports won't work with toImageUrl() -->
<Banner image="/images/melon-banner.png" />

<MyPage class="flex min-h-lvh flex-col pt-14 sm:pt-18" {header} {footer}>
    {@render children()}
</MyPage>
