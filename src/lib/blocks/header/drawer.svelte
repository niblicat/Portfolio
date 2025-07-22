<script lang="ts">
    import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
    import * as Drawer from '$lib/components/ui/drawer/index.js';
    import { NavItemKind } from '../../structures/nav';
    import { navItems } from '$lib/data/navitems';
    import { Content } from '$lib/components/ui/dropdown-menu';

    let open = $state(false);
</script>

<Drawer.Root bind:open>
    <Drawer.Trigger class={buttonVariants({ variant: 'outline' })}>Directory</Drawer.Trigger>
    <Drawer.Content>
        <nav class="mx-4 mt-4">
            {#each navItems as item}
                <div class="py-4 text-2xl font-light font-stretch-200%">
                    {item.title}
                </div>
                <div class="flex flex-wrap justify-around gap-2">
                    {#if item.kind === NavItemKind.Content}
                        <!-- Display a header with buttons -->
                        {#each item.contents as content}
                            <Button size="sm" class="min-w-[calc(50%-0.5rem)]" href={content.href}>
                                {content.name}
                            </Button>
                        {/each}
                    {:else if item.kind === NavItemKind.Link}
                        <!-- Display header with singular button -->
                        <Button size="sm" class="min-w-[calc(100%)]" href={item.href}>
                            {item.title}
                        </Button>
                    {/if}
                </div>
            {/each}
        </nav>
        <Drawer.Footer>
            <Drawer.Close class={buttonVariants({ variant: 'outline' })}>Back</Drawer.Close>
        </Drawer.Footer>
    </Drawer.Content>
</Drawer.Root>
