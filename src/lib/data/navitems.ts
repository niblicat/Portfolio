import { NavItemKind, type ContentNavItem, type LinkNavItem, type NavItem } from "$lib/structures/nav";
import navItemsRaw from "$lib/data/navitems.json"

export const navItems: NavItem[] = navItemsRaw.map(item => {
    if (item.contents) {
        return {
            title: item.title,
            kind: NavItemKind.Content,
            contents: item.contents
        } as ContentNavItem;
    }
    else if (item.href) {
        return {
            title: item.title,
            kind: NavItemKind.Link,
            href: item.href
        } as LinkNavItem;
    }
    else throw new Error("Unexpected Nav Item type!");
})