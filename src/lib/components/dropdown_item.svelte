<script>
    /** @type {string} */
    export let title;
    /** @type {string[]} */
    export let subtitle;
    /** @type {string[]=} */
    export let description;
    /** @type {string=} */
    export let icon;

    $: filteredDescription = (description ?? []).filter((i) => i !== "");
    $: multilineSubtitle = subtitle.length > 1;
</script>

<div
    class="w-item relative flex h-fit items-center rounded-lg py-5 pr-8 leading-5"
>
    <div class="absolute inset-[0] left-[25px] z-[-1] rounded-lg bg-gray-100" />
    <div
        class="from-accent to-accent-2 flex h-[50px] w-[50px] min-w-[50px] items-center justify-center self-start rounded-lg bg-gradient-to-b"
    >
        {#if icon !== undefined}
            <div class="p-2">
                <img
                    class="h-full w-full"
                    src={icon}
                    alt="Icon"
                />
            </div>
        {/if}
    </div>
    <div class="w-full overflow-hidden pl-4 leading-5">
        <h3 class="whitespace-nowrap font-bold">{title}</h3>
        {#if subtitle.length === 1}
            <p class="whitespace-nowrap text-sm font-medium text-gray-800">
                {subtitle}
            </p>
        {/if}
        {#if multilineSubtitle}
            <div class="relative pl-3 text-sm leading-4 text-gray-800">
                <div
                    class="bg-accent absolute left-[2px] top-[11%] h-[80%] w-[2px] rounded-sm"
                />
                {#each subtitle as i}
                    <p>{i}</p>
                {/each}
            </div>
        {/if}
        {#if filteredDescription.length > 0}
            <ul class={`list-disc text-xs ${!multilineSubtitle ? "mt-4" : ""}`}>
                {#each description ?? [] as i}
                    <li class="mt-1">{i}</li>
                {/each}
            </ul>
        {/if}
    </div>
</div>
