<script lang="ts">
    import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
    import { NavItemKind, type NavContent, type NavItem } from '../structures/nav';
    import { navItems } from '$lib/data/navitems';
    import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
    import { buttonVariants } from '$lib/components/ui/button';
</script>

{#snippet ListLink(content: NavContent)}
    <NavigationMenu.Link href={content.href}>
        <p class="font-medium">{content.name}</p>
        <p class="text-muted-foreground">{content.description}</p>
    </NavigationMenu.Link>
{/snippet}

{#snippet ListContent(contents: NavContent[])}
    <NavigationMenu.Content>
        <ul class="grid w-[300px] gap-4 p-2">
            {#each contents as content (content.name)}
                <li>
                    {@render ListLink(content)}
                </li>
            {/each}
        </ul>
    </NavigationMenu.Content>
{/snippet}

{#snippet ListItem(item: NavItem)}
    <NavigationMenu.Item>
        {#if item.kind === NavItemKind.Content}
            <NavigationMenu.Trigger class={buttonVariants({ variant: 'outline' })}>
                {item.title}
            </NavigationMenu.Trigger>
            {@render ListContent(item.contents)}
        {:else if item.kind === NavItemKind.Link}
            <NavigationMenu.Link>
                {#snippet child()}
                    <a href={item.href} class={navigationMenuTriggerStyle()}>{item.title}</a>
                {/snippet}
            </NavigationMenu.Link>
        {/if}
    </NavigationMenu.Item>
{/snippet}

<NavigationMenu.Root viewport={false}>
    <NavigationMenu.List class="flex flex-wrap">
        {#each navItems as item (item.title)}
            {@render ListItem(item)}
        {/each}
    </NavigationMenu.List>
</NavigationMenu.Root>
