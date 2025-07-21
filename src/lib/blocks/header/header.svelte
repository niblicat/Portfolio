<script lang="ts">
    import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
    import { DarkLight } from '$lib/components/ui/darklight';
    import type { NavContent, NavItem } from '../../structures/nav';
    import navItems from '$lib/data/navitems.json';
</script>

{#snippet ListContent(contents: NavContent[])}
    <NavigationMenu.Content>
        <ul class="grid w-[300px] gap-4 p-2">
            {#each contents as content}
                <li>
                    <NavigationMenu.Link href={content.href}>
                        <p class="font-medium">{content.name}</p>
                        <p class="text-muted-foreground">{content.description}</p>
                    </NavigationMenu.Link>
                </li>
            {/each}
        </ul>
    </NavigationMenu.Content>
{/snippet}

{#snippet ListItem(item: NavItem)}
    <NavigationMenu.Item>
        <NavigationMenu.Trigger>{item.title}</NavigationMenu.Trigger>
        {@render ListContent(item.contents)}
    </NavigationMenu.Item>
{/snippet}

<header>
    <div class="fixed top-8 right-0 left-0 z-50 px-2 sm:px-8">
        <div
            class="top-4 z-50 mx-auto flex justify-between gap-4 rounded-lg bg-(--secondary) px-2 py-2 align-middle sm:px-8"
        >
            <!-- TODO: Create a cool logo here -->
            <p class="my-auto text-4xl font-thin">Nibli</p>
            <div class="flex justify-end gap-4">
                <NavigationMenu.Root viewport={false}>
                    <NavigationMenu.List>
                        {#each navItems as item}
                            {@render ListItem(item)}
                        {/each}
                    </NavigationMenu.List>
                </NavigationMenu.Root>
                <DarkLight />
            </div>
        </div>
    </div>
</header>
