<script>
    /** @type {string} */
    export let title;
    /** @type {string[]} */
    export let subtitle;
    /** @type {string[]=} */
    export let description;
    /** @type {string=} */
    export let icon;
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
    <div class="absolute inset-[0] left-[25px] z-[-1] rounded-lg bg-gray-100" />
    {#if icon !== undefined && icon !== ""}
        <div
            class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center self-start rounded-lg bg-gradient-to-b from-accent to-accent-2"
        >
            <div class="p-2">
                <img
                    class="h-[32px] w-[32px]"
                    src={icon}
                    alt="Icon"
                />
            </div>
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
            <p
                class="whitespace-nowrap text-sm font-medium text-gray-800 fade-line"
            >
                {subtitle}
            </p>
        {/if}
        {#if multilineSubtitle}
            <div class="relative pl-3 text-sm leading-4 text-gray-800">
                <div
                    class="absolute left-[2px] top-[11%] h-[80%] w-[2px] rounded-sm bg-accent"
                />
                {#each subtitle as i}
                    <p>{i}</p>
                {/each}
            </div>
        {/if}
        {#if filteredDescription.length > 0}
            <ul class={`list-disc text-xs ${!multilineSubtitle ? "mt-4" : ""}`}>
                {#each filteredDescription ?? [] as i}
                    <li class="mt-1">{i}</li>
                {/each}
            </ul>
        {/if}
        {#if badges && badges.length > 0}
            <ul class="mt-2.5 flex flex-wrap gap-1 text-xs">
                {#each badges as badge}
                    <li class="rounded-full px-2.5 py-1 text-chip bg-chip">
                        <p>{badge}</p>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</div>
