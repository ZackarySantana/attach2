<script>
    import Dropdown from "$components/dropdown.svelte";
    import { onMount } from "svelte";

    let views = 0;

    onMount(() => {
        fetch("/api/view")
            .then((res) => res.text())
            .then((res) => (views = parseInt(res)));
    });

    /** @type {import('$lib/resume.js').Resume} */
    export let resume;
</script>

<Dropdown title="📧 Contact Me">
    <p>Contact me</p>
</Dropdown>

<p>{views}</p>
