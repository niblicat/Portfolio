import type { WithElementRef } from 'bits-ui';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface StandardProps extends WithElementRef<HTMLAnchorAttributes> {
    /** The class to use on the component's main element. */
    class?: string;
    /** Children of the component's main element.  */
    children?: Snippet;
}
