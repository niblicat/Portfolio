import {
    NavItemKind,
    type ContentNavItem,
    type LinkNavItem,
    type NavItem
} from '$lib/structures/nav';

import navItemsRaw from './nav-items.json';

import { type ExperienceItem } from '$lib/structures/experience';

import experienceItemsRaw from './experience-items.json';

const imageMap: Record<string, string> = import.meta.glob('$lib/images/*', {
    eager: true,
    import: 'default'
});

const navItems: NavItem[] = navItemsRaw.map((item) => {
    if (item.contents) {
        return {
            title: item.title,
            kind: NavItemKind.Content,
            contents: item.contents
        } as ContentNavItem;
    } else if (item.href) {
        return {
            title: item.title,
            kind: NavItemKind.Link,
            href: item.href
        } as LinkNavItem;
    } else throw new Error('Unexpected Nav Item type!');
});

const experienceItems: ExperienceItem[] = experienceItemsRaw.map((item) => ({
    ...item,
    src: imageMap[item.src],
    start: new Date(new Date(item.start).toLocaleString('en', { timeZone: 'UTC' })),
    end: item.end
        ? new Date(new Date(item.end).toLocaleString('en', { timeZone: 'UTC' }))
        : undefined
}));

export { navItems, experienceItems };
