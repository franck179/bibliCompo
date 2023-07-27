import {component$} from "@builder.io/qwik";
import LogoSmall from "~/components/en-tetes/logoSmall";
import ThemeSwitcher from "~/components/buttons/themeSwitcher";

interface ElvEtabHeadProps {
    nomEtab?: string;
    nomElv?: string;
    nomClasse?: string;
 }


 export default component$<ElvEtabHeadProps>((props) => {
        const classe = props.nomClasse?props.nomClasse:"";
        return (
            <div class={"flex justify-between items-center sm:text- md:text-md  lg:text-lg xl:text-xl  bg-primary-300  px-3 py-1 mb-8"}>
                <LogoSmall />
                <div class={"text-onPrimary dark:text-onPrimary/[87]"}>{props.nomEtab}</div>
                <div class={"flex flex-row justify-between gap-6"}>
                    <div class={"text-onPrimary dark:text-onPrimary/[87]"}>{props.nomElv}</div>
                   {(classe !== "") && <div class={"text-onPrimary dark:text-onPrimary/[87]"}> {classe} </div>}
                </div>
                <ThemeSwitcher />
            </div>
        );
    });
