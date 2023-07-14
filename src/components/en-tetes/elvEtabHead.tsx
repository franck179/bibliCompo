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
            <div class={"flex justify-between items-center sm:text- md:text-md  lg:text-lg xl:text-xl border-2 bg-blue-800 border-white px-3 py-1"}>
                <LogoSmall />
                <div class={"text-white"}>{props.nomEtab}</div>
                <div class={"flex flex-row justify-between gap-6"}>
                    <div class={"text-white"}>{props.nomElv}</div>
                   {(classe !== "") && <div class={"text-white"}> {classe} </div>}
                </div>
            </div>
        );
    });
