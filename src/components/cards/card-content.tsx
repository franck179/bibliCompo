import {component$, Slot} from "@builder.io/qwik";

export default component$(() => {
        return (
            <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <Slot />
            </div>

        )
    }
);