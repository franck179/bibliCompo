import {component$} from "@builder.io/qwik";
import StandaloneLinkBtn from "~/components/buttons/standaloneLinkBtn";
import SpiderResults from "~/components/spiderResults";

function getScore(nomRef:string, idElv:number): number[]{
    switch (idElv) {
        case 1:
            switch (nomRef) {
                case "riasec":
                    return [1,2,3,4,5,4];
                default:
                    return [0,0,0,0,0,0];
            }
        case 2:
            switch (nomRef) {
                case "riasec":
                    return [4,3.1,2,4,3.2,1];
                default:
                    return [0,0,0,0,0,0];
            }
        default:
            return [0,0,0,0,0,0];
    }
}


export default component$(() => {
    const score= getScore("riasec", 2);
    return (
        <>
            <div class={"flex md:col-span-2 justify-center text-3xl"}>Mon Profil R.I.A.S.E.C.</div>
            <div class={{"flex flex-col justify-start align-middle":true}}>

                <div class={"grid grid-cols-6 flex items-center text-2xl md:text-3xl"}>
                    <div class={"flex flex-col justify-center items-center"}>
                        <div>R</div>
                        <div>{score[0]}</div>
                    </div>
                    <div class={"flex flex-col justify-center items-center"}>
                        <div>I</div>
                        <div>{score[1]}</div>
                    </div>
                    <div class={"flex flex-col justify-center items-center"}>
                        <div>A</div>
                        <div>{score[2]}</div>
                    </div>
                    <div class={"flex flex-col justify-center items-center"}>
                        <div>S</div>
                        <div>{score[3]}</div>
                    </div>
                    <div class={"flex flex-col justify-center items-center"}>
                        <div>E</div>
                        <div>{score[4]}</div>
                    </div>
                    <div class={"flex flex-col justify-center items-center"}>
                        <div>C</div>
                        <div>{score[5]}</div>
                    </div>

                </div>
            </div>

            <div class={"flex justify-center items-center md:row-span-2"}>
                <SpiderResults R={score[0]} I={score[1]} A={score[2]} S={score[3]} E={score[4]} C={score[5]} />
            </div>
            <div class={""}>
                <StandaloneLinkBtn href={"../results"}>Découvrir les métiers correpondants à ce profil</StandaloneLinkBtn>
            </div>

        </>
    )
});