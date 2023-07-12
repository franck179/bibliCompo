import {component$} from "@builder.io/qwik";
import LogoSmall from "~/components/en-tetes/logoSmall";

interface ElvEtabHeadProps {
    nomEtab?: string;
    nomElv?: string;
    nomClasse?: string;
 }


 export default component$<ElvEtabHeadProps>((props) => {
        const classe = props.nomClasse?props.nomClasse:"";
        return (
            <div class={"flex justify-between items-center sm:text- md:text-md  lg:text-lg xl:text-xl border-2 bg-amber-300 border-amber-400 px-3 py-1"}>
                <LogoSmall />
                <div>{props.nomEtab}</div>
                <div class={"flex flex-row justify-between gap-6"}>
                    <div>{props.nomElv}</div>
                   {(classe !== "") && <div> {classe} </div>}
                </div>
            </div>
        );
    });
