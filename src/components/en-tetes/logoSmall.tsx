import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <div class="flex bg-transparent items-center">
                <div class="shrink-0">
                    <img class="h-10 w-14" src="/etco-logo-small-transparent.png"
                         alt="ETCO Libres d'apprendre"/>
                </div>
                <div class="ml-4">
                    <div class="text-xl font-sans text-white">ETCO Libres d'apprendre</div>
                </div>
            </div>
        </>
    );
}
);