<script>
    import Dropdown from "$components/dropdown.svelte";
    import DropdownItem from "$components/dropdown_item.svelte";
    import { formatDate } from "$lib/utils";

    /** @type {import('$lib/resume.js').Resume} */
    export let resume;

    /**
     * @param i {import('$lib/resume.js').WorkExperience}
     * @returns {string[]}
     */
    function subtitle(i) {
        // format start and end like: Jan 2023 - Jul 2023
        return [
            i.company,
            `${formatDate(i.start_date)} - ${formatDate(i.end_date)}`,
            i.location ?? "",
        ];
    }
</script>

<Dropdown title="💼 Work Experience">
    {#each resume.work_experience as i}
        <DropdownItem
            title={i.position}
            subtitle={subtitle(i)}
            description={i.description}
            icon={undefined}
        >
            <p>{i.company}</p>
        </DropdownItem>
    {/each}
</Dropdown>
