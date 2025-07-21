export enum NavItemKind {
    Content = 0,
    Link = 1
}

export interface NavContent {
    name: string;
    description?: string;
    href: string;
}

interface CoreNavItem {
    kind: NavItemKind;
    title: string;
}

export interface ContentNavItem extends CoreNavItem {
    kind: NavItemKind.Content;
    contents: NavContent[];
}

export interface LinkNavItem extends CoreNavItem {
    kind: NavItemKind.Link;
    href: string;
}

export type NavItem = ContentNavItem | LinkNavItem;
