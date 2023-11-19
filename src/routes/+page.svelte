<script>
    import welcome from "$lib/images/svelte-welcome.webp";
    import welcome_fallback from "$lib/images/svelte-welcome.png";
    import Personal from "./personal.svelte";
    import WorkExperience from "./work_experience.svelte";
    import Projects from "./projects.svelte";
    import Education from "./education.svelte";
    import Games from "./games.svelte";
    import Contact from "./contact.svelte";
    import Apps from "./apps.svelte";

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
<WorkExperience resume={data} />
<Projects resume={data} />
<Education resume={data} />
<Games resume={data} />
<Apps resume={data} />
<Contact resume={data} />
