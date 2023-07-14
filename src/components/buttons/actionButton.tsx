import {$, component$, useSignal, useTask$} from "@builder.io/qwik";


interface ActionButtonProps {
    action: "voir"|"continuer"|"commencer"
}

export default component$<ActionButtonProps>((props) => {
    const action = props.action;
    const texte = useSignal("");
    useTask$(async () => {
        if (action === "voir") {
            texte.value = "Voir le résultat";
        } else if (action === "continuer") {
            texte.value = "Continuer";
        } else {
            texte.value = "Commencer le test";
        }
    });
    const onClick = $(() => {
        if (action === "voir") {
            console.log("voir");
        } else if (action === "continuer") {
            console.log("continuer");
        } else {
            console.log("commencer");
    }
    })
    const classe = "flex justify-center items-center bg-gray-700 rounded-lg hover:shadow-lg hover:bg-gray-600 text-white p-2 max-w-lg max-h-lg ";
    return (
            <button class={classe} onClick$={() =>onClick()} >{texte.value}</button>
    );
});
