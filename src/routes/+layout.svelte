<script>
    import "../app.postcss";

    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";

    inject({ mode: dev ? "development" : "production" });
</script>

<div class="mx-auto max-w-[500px] light-fire">
    <header class="flex items-center justify-center py-4">
        <a
            href="https://github.com/ZackarySantana/Attach2"
            target="_blank"
            class="font-mono text-sm text-attach-accent"
        >
            |attach|
        </a>
    </header>

    <main class="px-4">
        <slot />
    </main>

    <footer class="flex items-center justify-center px-5 py-8 sm:px-10">
        <a
            href="https://github.com/ZackarySantana/Attach2"
            target="_blank"
        >
            <p class="text-sm">
                Putting the power of connecting in to the hands of the user.
                <br />
                Theme:
                <code>Light Fire</code>
            </p>
            <h3>
                Click here to make your own <span
                    class="font-mono text-attach-accent"
                >
                    |attach|
                </span>
            </h3>
        </a>
    </footer>
</div>
