<script>
    import Dropdown from "$components/dropdown.svelte";
    import Spinner from "$components/spinner.svelte";
    import { onMount } from "svelte";

    let views = -1;

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

<div
    class="flex w-[30%] justify-center gap-1 rounded-lg px-4 py-3 font-bold bg-primary"
>
    <Spinner loading={views === -1}>
        <p>{views}</p>
    </Spinner>
    <p>Views</p>
</div>
