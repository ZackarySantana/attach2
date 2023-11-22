<script>
    import Personal from "./personal.svelte";
    import Contact from "./contact.svelte";
    import Dropdown from "$components/dropdown.svelte";
    import DropdownItem from "$components/dropdown_item.svelte";
    import {
        transformApp,
        transformCertificate,
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
            data: data.work_experience.flatMap(transformWorkExperience),
        },
        {
            title: "🕸️ Projects",
            data: data.projects.flatMap(transformProject),
        },
        {
            title: "🧠 Education",
            data: data.education.flatMap(transformEducation),
        },
        {
            title: "🎮 Games",
            data: data.games.flatMap(transformGame),
        },
        {
            title: "📱 Mobile Apps",
            data: data.apps.flatMap(transformApp),
        },
        {
            title: "📜 Certificates",
            data: data.certificates.flatMap(transformCertificate),
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
                badges={i.badges}
            />
        {/each}
    </Dropdown>
{/each}

<Contact resume={data} />
