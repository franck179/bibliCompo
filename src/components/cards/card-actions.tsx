import {component$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import StandaloneLinkBtn from "~/components/buttons/standaloneLinkBtn";

interface CardActionsProps {
    mainBtnText: string;
}


export default component$<CardActionsProps>((props) => {
    return (
        <>
            {/*<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />*/}
            <div class={"grid grid-cols-1 grid-rows-3 items-center gap-2"}>
                <div class={"row-span-2 h-full"}>
                    <StandaloneLinkBtn href={"/test_ou_section"}>{props.mainBtnText}</StandaloneLinkBtn>
                </div>
                <div class={"w-1/2 justify-self-center"}>
                    <StandaloneLinkBtn href={"/back"}>Retour en arrière</StandaloneLinkBtn>
                </div>
            </div>
            {/*<a href="/test_ou_section" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
            {/*    {props.mainBtnText}*/}
            {/*</a>*/}
            {/*<a href="/back" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
            {/*    Retour en arrière*/}
            {/*</a>*/}

        </>
    );
});