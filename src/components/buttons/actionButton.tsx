import {$, component$, useSignal} from "@builder.io/qwik";
import {text} from "stream/consumers";

interface ActionButtonProps {
    action: "voir"|"continuer"|"commencer"
}

export default component$<ActionButtonProps>((props) => {
    const action = props.action;
    const texte = useSignal("");
    if (action === "voir") {
        texte.value = "Voir le résultat";
    }
    else if (action === "continuer") {
        texte.value = "Continuer";
    }
    else if (action === "commencer") {
        texte.value = "Commencer le test";
    }
    const onClick = $(() => {
        if (action === "voir") {
            console.log("voir");
        } else if (action === "continuer") {
            console.log("continuer");
        } else if (action === "commencer") {
            console.log("commencer");
    }
    })
    const classe = "flex justify-center items-center bg-amber-200 rounded-lg hover:shadow-lg p-2 max-w-lg max-h-lg ";
    return (
            <button class={classe} onClick$={() =>onClick()} >{texte.value}</button>
    );
});
