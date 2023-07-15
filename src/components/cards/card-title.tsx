import {component$, Slot} from "@builder.io/qwik";

export default component$(() => {
    return (

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Slot />
        </h5>

    )
    }
);
