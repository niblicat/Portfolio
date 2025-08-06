export interface ExperienceItem {
    /** The ID attribute for the experience item. */
    id: string;
    organization: string;
    title: string;
    start: Date;
    end?: Date;
    location?: string;
    description?: string;
    highlights?: string[];
    /** The image source. */
    src: string;
    /** The image alt text. */
    alt: string;
}
