import {component$, Slot} from "@builder.io/qwik";

export default component$(() => {
    return (

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-onLBackground
        dark:tracking-wide dark:text-onPrimary/[87]">
            <Slot />
        </h5>

    )
    }
);
