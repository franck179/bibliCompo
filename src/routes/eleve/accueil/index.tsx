import {component$} from "@builder.io/qwik";
import LinkBtn from "~/components/buttons/linkBtn";


export default component$(() => {
    return (
        <>
            <div class={"h-screen w-full"}>
                <div class={"grid grid-cols-1 my-8  md:grid-flow-col md:grid-cols-2 gap-4 h-1/2 md:h-1/3  xl:h-1/6 justify-stretch"}>
                    <LinkBtn  href="/page2">Score Études</LinkBtn>
                    <LinkBtn  href="/page2">Orientation</LinkBtn>
                    <div class={"md:row-span-2"}>
                        <LinkBtn  href="/page2">Méthodes de travail</LinkBtn>
                    </div>
                </div>
            </div>
        </>
    );
});