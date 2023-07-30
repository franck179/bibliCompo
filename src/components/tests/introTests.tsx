import {component$, Slot} from "@builder.io/qwik";
import StandaloneLinkBtn from "~/components/buttons/standaloneLinkBtn";

interface IntroTestsProps {
    annee : number;
}


export default component$<IntroTestsProps>(
    (props) =>
    {

    return (
        <>
            {/*<div class="flex flex-col justify-start align-middle">*/}
            {/*    <div class={"text-2xl mb-7 "}>Année scolaire {props.annee}-{props.annee+1}</div>*/}
            {/*    <Slot />*/}
            {/*</div>*/}
            <div class={"grid grid-cols-1 gap-4"}>
                <div class={"flex flex-row justify-between items-center mb-7"} id={"coucou"}>
                    <div class={"flex  text-2xl  mr-4"}>Année scolaire {props.annee}-{props.annee+1}</div>
                    <div class={"basis-1/4"}><StandaloneLinkBtn href={"../profil"} color={"accent"}>Profil</StandaloneLinkBtn></div>
                </div>
                <Slot />
            </div>
        </>
    );
    }
);