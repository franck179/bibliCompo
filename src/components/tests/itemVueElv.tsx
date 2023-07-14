import type { Signal} from "@builder.io/qwik";
import {component$, useSignal, useTask$} from "@builder.io/qwik";
import ActionButton from "~/components/buttons/actionButton";
import InsertedLinkBtn from "~/components/buttons/insertedLinkBtn";

interface ItemVueElvProps {
    nomTest: string;
    status: "enCours" | "termine" | "nouveau";
}

export default component$<ItemVueElvProps>((props) => {
   // const action : Signal<"voir"|"continuer"|"commencer"> = useSignal("commencer");
    const url = useSignal("/");
    const texte = useSignal("");
   const message = useSignal("");
    useTask$(async () => {
        if (props.status === "enCours") {
            // action.value = "continuer";
            message.value = "Commencé";
            url.value = "/tests/"+props.nomTest;
            texte.value = "Continuer";
        }
        else if (props.status === "termine") {
            // action.value = "voir";
            message.value = "Terminé";
            url.value = "/tests/voir/"+props.nomTest;
            texte.value = "Voir le résultat";
        }
        else {
            // action.value = "commencer";
            message.value = "Nouveau";
            url.value = "/tests/start/"+props.nomTest;
            texte.value = "Commencer le test";
        }
    });

    return (
        <div class={"grid grid-cols-3 justify-center  items-center sm:text- md:text-md  lg:text-lg xl:text-xl my-1 bg-gray-700 text-white rounded-lg px-3 py-1"}>
            <div class={"justify-self-start"}>{props.nomTest}</div>
            <div class={"col-start-2 justify-self-center"}>{message.value}</div>
            <div class={"col-start-3 justify-self-end"}>
               {/*<ActionButton action={action.value}/>*/}
                <InsertedLinkBtn href={url.value}>{texte.value}</InsertedLinkBtn>
            </div>
        </div>
    )
});