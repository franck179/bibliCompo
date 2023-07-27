import {component$, Slot} from "@builder.io/qwik";

export default component$(() => {
        return (
            <div class="mb-3 font-normal text-onLBackground
            dark:tracking-wide dark:text-onPrimary/60">
                <Slot />
            </div>

        )
    }
);