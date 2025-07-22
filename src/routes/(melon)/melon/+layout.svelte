<script lang="ts">
    import '/Users/nibli/Documents/code/portfolio/src/app.css';
    import { MyPage } from '$lib/blocks/mypage';
    import Banner from '$lib/blocks/header/banner.svelte';
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

{#snippet logo()}
    <div
        class="bg-foreground/15 dark:bg-foreground border-color-border max-h-12 max-w-28 rounded-lg border-2 border-solid p-1"
    >
        <img class="object-contain" src="/images/merge-logo-2.png" alt="Melon Merge 3D logo" />
    </div>
{/snippet}

<Banner url="/images/melon-banner.png" />

<MyPage secondary={logo}>
    {@render children()}
</MyPage>
