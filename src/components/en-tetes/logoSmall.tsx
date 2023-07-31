import {component$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <div class="flex bg-transparent w-fit">
                <div class="shrink-0">
                    <Link href="/">
                        <img class="h-10 w-14" src="/src/assets/images/etco-logo-small-transparent.png"
                             alt="ETCO Libres d'apprendre"/>
                    </Link>
                </div>
                <div class="sm:ml-4">
                    <div class="sm:text-xl font-sans text-lm-textColor dark:text-dm-textColor">{$localize`ETCO Libres d'apprendre`}</div>
                </div>
            </div>
        </>
    );
}
);