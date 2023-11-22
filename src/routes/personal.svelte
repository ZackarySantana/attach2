<script>
    import Badge from "$components/badge.svelte";
    import Badges from "$components/badges.svelte";
    import MultilineSubtitle from "$components/multiline_subtitle.svelte";

    /** @type {import('$lib/resume.js').Resume} */
    export let resume;

    $: badges = [
        ...resume.work_experience,
        ...resume.apps,
        ...resume.games,
        ...resume.projects,
    ]
        .flatMap((e) => e.technologies)
        .filter((b) => b !== undefined)
        .filter((b, i, arr) => arr.indexOf(b) === i);
</script>

<section class="mb-3 rounded-lg pb-4 bg-primary">
    <div>
        <!-- Banner and profile pic -->
    </div>
    <div class="px-4 pt-1">
        <h1 class="text-2xl font-bold">
            {resume.personal.first_name}
            {resume.personal.last_name}
        </h1>
        <h2 class="text-primary-subtitle text-lg font-medium">
            Software Engineer, Fullstack
        </h2>
        <MultilineSubtitle>
            <p>I bring about amazing websites</p>
            <p>Miami, FL</p>
            <p>Florida International University</p>
        </MultilineSubtitle>
        {#if badges && badges.length > 0}
            <Badges>
                {#each badges as badge}
                    <Badge>
                        <p>{badge}</p>
                    </Badge>
                {/each}
            </Badges>
        {/if}
    </div>
</section>
