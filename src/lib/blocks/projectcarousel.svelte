<script lang="ts">
    import * as Carousel from '$lib/components/ui/carousel/index';
</script>

<Carousel.Root
    slot="project-carousel"
    orientation="horizontal"
    class="bg-foreground/5 inset-shadow-secondary/50 m-4 mx-auto max-w-xl rounded-lg border p-4 inset-shadow-sm"
>
    <Carousel.Content>
        <Carousel.Item>...</Carousel.Item>
        <Carousel.Item>...</Carousel.Item>
        <Carousel.Item>...</Carousel.Item>
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
</Carousel.Root>
