import {component$, useSignal, useTask$} from "@builder.io/qwik";
import InsertedLinkBtn from "~/components/buttons/insertedLinkBtn";

interface ItemVueElvProps {
    nomTest: string;
    status: "enCours" | "termine" | "nouveau";
    percent?: number;
}



export default component$<ItemVueElvProps>((props) => {
   // const action : Signal<"voir"|"continuer"|"commencer"> = useSignal("commencer");
    const url = useSignal("/");
    const texte = useSignal("");
    const message = useSignal("");
    const gradientBP = useSignal("");
    const percent = useSignal(0);
    useTask$(async () => {
        if (props.status === "enCours") {
            // action.value = "continuer";
            message.value = "Commencé";
            url.value = "/tests/"+props.nomTest;
            texte.value = "Continuer";
            gradientBP.value = "from-35% via-35%";
            if (props.percent){
                if (props.percent > 100) {
                    percent.value = 100;
                }
                else if (props.percent < 0) {
                    percent.value = 0;
                }
                else {
                    percent.value = props.percent;
                }
            }
            else {
                percent.value = 35;
            }

        }
        else if (props.status === "termine") {
            // action.value = "voir";
            message.value = "Terminé";
            url.value = "/tests/voir/"+props.nomTest;
            texte.value = "Voir le résultat";
            gradientBP.value = "from-100% via-100%"
            percent.value = 100;
        }
        else {
            // action.value = "commencer";
            message.value = "Nouveau";
            url.value = "/tests/start/"+props.nomTest;
            texte.value = "Commencer le test";
            gradientBP.value = "from-0% via-0%";
            percent.value = 0;
        }
    });

    return (
        <>
            <div class="z-0 relative bg-gray-700 rounded-lg" style={{width:"100%"}}>
                {/*
                    La class absolute top-0 left-0 positionne la div en question de façon absolue en haut à gauche
                    de sa div relative parente. Elle perd par la même occasion toute existence physique pour le
                    placement de ses siblings. En positionnant les divers éléments à des z judicieux, on obtient
                    l'effet de superposition voulu
                */}
                <div class={`z-10 bg-green-700 rounded-l-lg ${(percent.value === 100) ? 'rounded-r-lg' : ''}  h-full absolute top-0 left-0`}
                     style={{width:percent.value+"%"}}></div>
                <div class={" grid grid-cols-3 justify-center  items-center sm:text- md:text-md  lg:text-lg xl:text-xl my-1  text-white  px-3 py-1"}>
                    <div class={"z-20 justify-self-start"}>{props.nomTest}</div>
                    <div class={"z-20 col-start-2 justify-self-center"}>{message.value}</div>
                    <div class={"z-20 col-start-3 justify-self-end"}>
                        <InsertedLinkBtn href={url.value}>{texte.value}</InsertedLinkBtn>
                    </div>
                </div>
            </div>


        </>
    )
});