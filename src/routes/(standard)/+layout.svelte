<script lang="ts">
    import Header from '$lib/blocks/header.svelte';
    import { MyPage } from '$lib/blocks/mypage';
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

{#snippet header()}
    <Header />
{/snippet}

{#snippet footer()}
    <!-- Don't make footer colors extend beyond page due to overscroll -->
    <footer class="mt-auto bg-red-500/50">
        footer
        <br />
        footer
    </footer>
{/snippet}

<MyPage class="flex min-h-lvh flex-col pt-14 sm:pt-18" {header} {footer}>
    {@render children()}
</MyPage>

<!--
Structure should be the following:
<body> (already good)
    <header></header>
    <main></main>
    <footer></footer>
</body>

it's okay to wrap header, main, and footer within a div tag
-->
