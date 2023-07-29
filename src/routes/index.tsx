
import {component$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import StandaloneLinkBtn from "~/components/buttons/standaloneLinkBtn";




export default component$(() => {
  // Dans flex uniquement :
  // justify-center : centre horizontalement
  // items-center : centre verticalement


/*
TODO:
   - créer une landing page (hero ?)
*/
return (
    <>
        <div class={"col-span-2 text-center"}>WILL BE THE HERO PAGE</div>
        <StandaloneLinkBtn href={"/eleve/accueil/"}>Composant d'accueil</StandaloneLinkBtn>
        <StandaloneLinkBtn href={"/eleve/orientation/tdb/"}>Composant Tableau de Bord</StandaloneLinkBtn>
        <StandaloneLinkBtn href={"/eleve/orientation/profil/"}>Composant Profil Elève</StandaloneLinkBtn>
    </>

     );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "Home name",
      content: "Home content",
    },
  ],
};
