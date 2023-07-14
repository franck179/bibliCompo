import {component$, Slot} from "@builder.io/qwik";

interface IntroTestsProps {
    annee : number;
}


export default component$<IntroTestsProps>(
    (props) =>
    {

    return (
        <>
            <div class="flex flex-col justify-start">
                <div class={"text-xl text-bg-gray-700"}>Année scolaire {props.annee}-{props.annee+1}</div>
                <Slot />
            </div>
        </>
    );
    }
);