import {component$, Slot} from "@builder.io/qwik";

interface IntroTestsProps {
    annee : number;
}


export default component$<IntroTestsProps>(
    (props) =>
    {

    return (
        <>
            <div class="flex flex-col justify-start align-middle">
                <div class={"text-2xl mb-7 "}>Année scolaire {props.annee}-{props.annee+1}</div>
                <Slot />
            </div>
        </>
    );
    }
);