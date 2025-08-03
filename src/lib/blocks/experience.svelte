<script lang="ts">
    import { experienceItems } from '$lib/data/page-json';
    import { type ExperienceItem } from '$lib/structures/experience';
    import { dateRange } from '$lib/utils';

    const convertToRange = (start: Date, end?: Date) =>
        dateRange(start, end, { format: { month: 'long', year: 'numeric' } });
</script>

{#snippet experienceArea(item: ExperienceItem)}
    <div
        class="text-foreground bg-foreground/5 inset-shadow-secondary/50 flex-1 rounded-lg border p-4 inset-shadow-sm"
    >
        <div>
            {item.organization}
        </div>
        <div class="text-foreground/50 mb-2">
            {convertToRange(item.start, item.end)} • {item.location}
        </div>
        <span>{item.description}</span>
        {#if item.bullets}
            <ul class="ml-6 list-disc">
                {#each item.bullets as bullet}
                    <li>{bullet}</li>
                {/each}
            </ul>
        {/if}
    </div>
{/snippet}
<!-- This element should fill the remaining space in the row without wrapping to the next line -->

{#snippet experienceListItem(item: ExperienceItem)}
    <li id={item.id} class="my-4 flex flex-row flex-wrap gap-2">
        <div
            class="before:bg-secondary-foreground/25 after:bg-secondary-foreground/25 flex basis-full justify-center text-center before:m-auto before:h-[2px] before:flex-1 before:content-[''] after:m-auto after:h-[2px] after:flex-1 after:content-['']"
        >
            <h3 class="mx-4 text-xl font-thin uppercase">
                {item.title}
            </h3>
        </div>
        <span class="flex w-1/6 sm:w-1/8">
            <img
                class="border-secondary mx-auto my-4 h-12 w-12 rounded-full border-2 object-cover sm:h-16 sm:w-16"
                src={item.src}
                alt={item.alt}
            />
        </span>
        {@render experienceArea(item)}
    </li>
{/snippet}

<ul id="experience" class="mx-auto my-8 max-w-4xl">
    {#each experienceItems as experienceItem (experienceItem.id)}
        {@render experienceListItem(experienceItem)}
    {/each}
</ul>
