<script>
    import Badge from "$components/badge.svelte";
    import Image from "$components/image.svelte";
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

<section class="relative mb-3 rounded-lg pb-4 bg-primary">
    <div
        class="h-[130px] w-full overflow-hidden rounded-2xl border-2 border-solid border-accent"
    >
        <Image
            pngSrc={"/banner.png"}
            alt="Banner"
            class="block h-full w-full object-center"
            loading="eager"
        />
    </div>
    <div
        class={`absolute left-[15px] top-[17.5px] h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-solid border-accent`}
    >
        <Image
            pngSrc={"/profile.png"}
            alt="Profile picture"
            class="block h-full w-full object-cover object-center"
        />
    </div>
    <div class="px-4 pt-1">
        <h1 class="text-2xl font-bold">
            {resume.personal.first_name}
            {resume.personal.last_name}
        </h1>
        <h2 class="text-lg font-medium text-primary-subtitle">
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
