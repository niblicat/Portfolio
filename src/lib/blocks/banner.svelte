<script lang="ts">
    import { toImageUrl } from '$lib/utils';

    interface Props {
        image: string;
    }

    let { image }: Props = $props();

    // Need to use background image style since tailwind
    // cannot compute dynamic values
</script>

<div
    data-slot="banner"
    class="absolute z-[-10] h-[33vh] w-full bg-[var(--background)] bg-cover bg-center bg-blend-multiply"
    style="background-image: {toImageUrl(image)}"
>
    <div class="to-background absolute inset-0 bg-gradient-to-b from-transparent"></div>
</div>
