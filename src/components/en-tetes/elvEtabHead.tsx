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

  <div
      class="grid h-full sm:text- md:text-md  lg:text-lg xl:text-xl  bg-primary-300  px-3 py-1"
      style={'grid-template-columns: auto 1fr auto'}>

    <div class="flex flex-col w-fit">
        <LogoSmall />
      <div class={"text-end"}>{props.nomEtab}</div>
    </div>

    <div class="flex flex-col grow-1 items-center justify-center pr-20">
      <div>{props.nomElv}</div>
      <div>{classe}</div>
    </div>

    <div class="flex justify-end items-center">
      <ThemeSwitcher />
    </div>

  </div>

);





    });
