




import type {DocumentHead} from "@builder.io/qwik-city";
import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <div class="flex justify-center items-center ">
                <div class="text-2xl font-bold">Page2</div>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Page2",
    meta: [
        {
            name: "Page2 name",
            content: "Page2 content",
        },
    ],
};