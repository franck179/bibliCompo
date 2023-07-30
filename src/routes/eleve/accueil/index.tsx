import {component$} from "@builder.io/qwik";
import StandaloneLinkBtn from "~/components/buttons/standaloneLinkBtn";


export default component$(() => {
    return (
        <>
            {/*<div class={"h-screen w-full"}>*/}
            {/*    <div class={"grid grid-cols-1 my-8  md:grid-flow-col md:grid-cols-2 gap-4 h-1/2 md:h-1/3  justify-stretch"}>*/}
            {/*        <LinkBtn  href="/page2">Score Études</LinkBtn>*/}
            {/*        <LinkBtn  href="../orientation/tdb/">Orientation</LinkBtn>*/}
            {/*        <div class={"md:row-span-2"}>*/}
            {/*            <LinkBtn  href="/page2">Méthodes de travail</LinkBtn>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div class={"order-1 h-16 md:h-24 lg:h-40"}> <StandaloneLinkBtn  href="/page2">Score Études</StandaloneLinkBtn> </div>
            <div class={" h-16 md:h-auto md:row-span-2 order-3 md:order-2"}><StandaloneLinkBtn href={"/page2"} >Méthodes de travail </StandaloneLinkBtn></div>
            <div class={"order-2 h-16 md:order-3 md:h-24 lg:h-40"}> <StandaloneLinkBtn  href="../orientation/tdb/" color={"accent"}>Orientation</StandaloneLinkBtn></div>
        </>
    );
});