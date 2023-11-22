<script>
    export let loading = true;
</script>

{#if loading}
    <div
        class="border-secondary mt-1 h-4 w-4 animate-spin rounded-full border-t-2"
    />
{:else}
    <slot />
{/if}

<style>
    .animate-spin {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
