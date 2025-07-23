<script lang="ts">
    import { MyPage } from '$lib/blocks/mypage';
    import Banner from '$lib/blocks/header/banner.svelte';
    import type { Snippet } from 'svelte';
    import imageLogo from '$lib/images/merge-logo-2.png';
    import imageBanner from '$lib/images/melon-banner.png';

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

<Banner url={imageBanner} />

<MyPage secondary={logo}>
    {@render children()}
</MyPage>
