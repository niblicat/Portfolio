export function getComputedValue(container: Element, cssProp: string): number {
    // https://stackoverflow.com/a/49507416
    return parseInt(
        window.getComputedStyle(container, null).getPropertyValue(cssProp).split('px')[0]
    );
}

export function getPaddingBoxWidth(element: Element): number {
    const width = getComputedValue(element, 'width');
    const paddingLeft = getComputedValue(element, 'padding-left');
    const paddingRight = getComputedValue(element, 'padding-right');

    return width - paddingLeft - paddingRight;
}

export function getOccupiedWidth(element: Element) {
    const width = getComputedValue(element, 'width');
    const marginLeft = getComputedValue(element, 'margin-left');
    const marginRight = getComputedValue(element, 'margin-right');

    return width + marginLeft + marginRight;
}

export function isFlexRowWrapped(element: Element): boolean {
    const children: Element[] = Array.from(element.children);
    /** The effective size of all children. */
    const childWidths = children.reduce(
        (accumulator, child) => accumulator + getOccupiedWidth(child),
        0
    );

    /** The content size of the flex box. */
    const paddingBoxWidth = getPaddingBoxWidth(element);

    const gap = getComputedValue(element, 'gap');
    /**
     * The maximum number of gaps the element contains.
     * When there are multiple rows, the actual number of gaps might be less
     * than this number.
     */
    const gapCount = children.length <= 0 ? 0 : children.length - 1;
    /** The maximum width the gaps could occupy. */
    const gapWidths = gap * gapCount;

    return childWidths + gapWidths >= paddingBoxWidth;
}
