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

    const transforms = [
        {
            title: "💼 Work Experience",
            data: data.work_experience.map(transformWorkExperience),
        },
        {
            title: "🕸️ Projects",
            data: data.projects.map(transformProject),
        },
        {
            title: "🧠 Education",
            data: data.education.map(transformEducation),
        },
        {
            title: "🎮 Games",
            data: data.games.map(transformGame),
        },
        {
            title: "📱 Mobile Apps",
            data: data.apps.map(transformApp),
        },
    ];
</script>

<svelte:head>
    <title>{data.personal.first_name}'s |attach|</title>
    <meta
        name="description"
        content="Svelte demo app"
    />
</svelte:head>

<Personal resume={data} />

{#each transforms as { title, data }}
    <Dropdown {title}>
        {#each data as i}
            <DropdownItem
                title={i.title}
                subtitle={i.subtitle}
                description={i.description}
                icon={i.icon}
            />
        {/each}
    </Dropdown>
{/each}

<Contact resume={data} />
