<script lang="ts">
    import { MyPage } from '$lib/blocks/mypage';
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<MyPage>
    {@render children()}
</MyPage>
