<script>
    /** @type {boolean=} */
    export let fades;
</script>

<p
    class={`text-primary-subtitle whitespace-nowrap text-sm font-medium ${
        fades ? "fade-line" : ""
    }`}
>
    <slot />
</p>
