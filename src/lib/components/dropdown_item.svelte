<script>
    import Badge from "./badge.svelte";
    import Badges from "./badges.svelte";
    import MultilineSubtitle from "./multiline_subtitle.svelte";
    import SinglelineSubtitle from "./singleline_subtitle.svelte";

    /** @type {string} */
    export let title;
    /** @type {string[]} */
    export let subtitle;
    /** @type {string[]=} */
    export let description;
    /** @type {string=} */
    export let icon;
    /** @type {string=} */
    export let website;
    /** @type {string[]=} */
    export let badges;

    $: filteredDescription = (description ?? []).filter((i) => i !== "");
    $: multilineSubtitle = subtitle.length > 1;
    $: small = subtitle.length < 2 && filteredDescription.length === 0;
</script>

<div
    class={`relative flex h-fit w-item items-center rounded-lg pr-8 leading-5 ${
        small ? "py-2" : "py-5"
    }`}
>
    <div class="absolute inset-[0] left-[25px] z-[-1] rounded-lg bg-primary" />
    {#if icon !== undefined && icon !== ""}
        <div
            class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center self-start rounded-lg bg-gradient-to-b from-accent to-accent-2"
        >
            <!-- TODO Make link components better, maybe a wrapper component that picks the parent dynamically? -->
            {#if website !== undefined && website !== ""}
                <a
                    href={website}
                    target="_blank"
                    class="p-2"
                >
                    <img
                        class="h-[32px] w-[32px]"
                        src={icon}
                        alt="Icon"
                    />
                </a>
            {:else}
                <div class="p-2">
                    <img
                        class="h-[32px] w-[32px]"
                        src={icon}
                        alt="Icon"
                    />
                </div>
            {/if}
        </div>
    {/if}
    {#if icon === undefined || icon === ""}
        <div class="h-[50px] w-[50px]" />
    {/if}
    <div class="w-full overflow-hidden pl-4 leading-5">
        {#if title !== ""}
            <h3 class="whitespace-nowrap font-bold">{title}</h3>
        {/if}
        {#if subtitle.length === 1}
            <SinglelineSubtitle
                fades={true}
                {website}
            >
                {subtitle}
            </SinglelineSubtitle>
        {/if}
        {#if multilineSubtitle}
            <MultilineSubtitle>
                {#each subtitle as i}
                    <p>{i}</p>
                {/each}
            </MultilineSubtitle>
        {/if}
        {#if filteredDescription.length > 0}
            <ul class={`list-disc text-xs ${!multilineSubtitle ? "mt-4" : ""}`}>
                {#each filteredDescription ?? [] as i}
                    <li class="mt-1">{i}</li>
                {/each}
            </ul>
        {/if}
        {#if badges && badges.length > 0}
            <div class="relative mt-5 text-sm leading-4 text-primary-subtitle">
                <p class="text-xs italic">{badges.join(", ")}</p>
            </div>
        {/if}
    </div>
</div>
