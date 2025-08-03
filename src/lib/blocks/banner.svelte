<script lang="ts">
    interface Props {
        image: string;
    }

    let { image }: Props = $props();
</script>

<div data-slot="banner" class="absolute z-[-10] h-[33vh] w-full">
    <img
        src={image}
        alt=""
        class="absolute -z-10 h-[33vh] w-full mask-linear-180 mask-linear-from-[0%] mask-linear-to-[100%] object-cover opacity-50"
    />
</div>
