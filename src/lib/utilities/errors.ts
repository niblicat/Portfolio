export class AttributeError extends Error {
    constructor(...attributes: string[]) {
        const offending = attributes.join(', ');
        const msg = 'Attributes cannot be simultanously specified: ' + offending;
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, AttributeError.prototype);
    }
}
