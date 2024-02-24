<script>
    /** @type {string} */
    export let webpSrc = "";

    /** @type {string} */
    export let pngSrc;

    /** @type {string} */
    export let alt;

    /** @type {boolean=} */
    export let lazy = false;
</script>

<picture>
    {#if webpSrc != ""}
        <source
            srcset={webpSrc}
            type="image/webp"
        />
    {/if}
    <source
        srcset={pngSrc}
        type="image/jpeg"
    />
    <img
        src={pngSrc}
        {alt}
        loading={lazy ? "lazy" : "eager"}
        class={$$props.class}
    />
</picture>
