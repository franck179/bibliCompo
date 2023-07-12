import type { Signal} from "@builder.io/qwik";
import {component$, useSignal} from "@builder.io/qwik";
import ActionButton from "~/components/buttons/actionButton";

interface ItemVueElvProps {
    nomTest: string;
    status: "enCours" | "termine" | "nouveau";
}

export default component$<ItemVueElvProps>((props) => {
   const action : Signal<"voir"|"continuer"|"commencer"> = useSignal("commencer");
   const message = useSignal("");

   if (props.status === "enCours") {
         action.value = "continuer";
         message.value = "Commencé";
   }
   else if (props.status === "termine") {
         action.value = "voir";
         message.value = "Terminé";
   }
    else if (props.status === "nouveau") {
         action.value = "commencer";
         message.value = "Nouveau";
    }
    return (
        <div class={"grid grid-cols-3 justify-center  items-center sm:text- md:text-md  lg:text-lg xl:text-xl my-1 bg-amber-200 rounded-lg px-3 py-1"}>
            <div class={"justify-self-start"}>{props.nomTest}</div>
            <div class={"col-start-2 justify-self-center"}>{message.value}</div>
            <div class={"col-start-3 justify-self-end"}>
               <ActionButton action={action.value}/>
            </div>
        </div>
    )
});