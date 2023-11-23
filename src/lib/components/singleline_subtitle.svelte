<script>
    /** @type {boolean=} */
    export let fades;
    /** @type {string=} */
    export let website;
</script>

{#if website !== undefined && website !== ""}
    <a
        href={website}
        target="_blank"
    >
        <p
            class={`text-primary-subtitle whitespace-nowrap text-sm font-medium ${
                fades ? "fade-line" : ""
            }`}
        >
            <slot />
        </p>
    </a>
{:else}
    <p
        class={`text-primary-subtitle whitespace-nowrap text-sm font-medium ${
            fades ? "fade-line" : ""
        }`}
    >
        <slot />
    </p>
{/if}
