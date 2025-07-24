import type { Snippet } from 'svelte';

export interface ChildrenProps {
    /** Children of the component's main element.  */
    children?: Snippet;
}

export interface StandardProps extends ChildrenProps {
    /** Class to use on the component's main element. */
    class?: string;
    /** Reference to the component. */
    ref?: HTMLElement | null;
}
