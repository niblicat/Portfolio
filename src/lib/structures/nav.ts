export interface NavContent {
    name: string;
    description?: string;
    href: string;
}

export interface NavItem {
    title: string;
    contents: NavContent[];
}
