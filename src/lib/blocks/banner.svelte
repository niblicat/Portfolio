<script lang="ts">
    interface Props {
        image: string;
    }

    let { image }: Props = $props();

    console.log(image);

    // Need to use style attribute since tailwind
    // cannot compute dynamic values
</script>

<div data-slot="banner" class="absolute z-[-10] h-[33vh] w-full">
    <img
        src={image}
        alt=""
        class="absolute -z-10 h-[33vh] w-full mask-linear-180 mask-linear-from-[0%] mask-linear-to-[100%] object-cover opacity-50"
    />
</div>
