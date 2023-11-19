<script>
    import Personal from "./personal.svelte";
    import Contact from "./contact.svelte";
    import Dropdown from "$components/dropdown.svelte";
    import DropdownItem from "$components/dropdown_item.svelte";
    import {
        transformApp,
        transformEducation,
        transformGame,
        transformProject,
        transformWorkExperience,
    } from "$lib/transforms";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.personal.first_name}'s |attach|</title>
    <meta
        name="description"
        content="Svelte demo app"
    />
</svelte:head>

<Personal resume={data} />

<Dropdown title="💼 Work Experience">
    {#each data.work_experience.map(transformWorkExperience) as i}
        <DropdownItem
            title={i.title}
            subtitle={i.subtitle}
            description={i.description}
            icon={i.icon}
        />
    {/each}
</Dropdown>

<Dropdown title="🕸️ Projects">
    {#each data.projects.map(transformProject) as i}
        <DropdownItem
            title={i.title}
            subtitle={i.subtitle}
            description={i.description}
            icon={i.icon}
        />
    {/each}
</Dropdown>

<Dropdown title="🧠 Education">
    {#each data.education.map(transformEducation) as i}
        <DropdownItem
            title={i.title}
            subtitle={i.subtitle}
            description={i.description}
            icon={i.icon}
        />
    {/each}
</Dropdown>

<Dropdown title="🎮 Games">
    {#each data.games.map(transformGame) as i}
        <DropdownItem
            title={i.title}
            subtitle={i.subtitle}
            description={i.description}
            icon={i.icon}
        />
    {/each}
</Dropdown>

<Dropdown title="📱 Mobile Apps">
    {#each data.apps.map(transformApp) as i}
        <DropdownItem
            title={i.title}
            subtitle={i.subtitle}
            description={i.description}
            icon={i.icon}
        />
    {/each}
</Dropdown>

<Contact resume={data} />
