import {
    component$,
    Slot,
    useContext,
    useTask$, useVisibleTask$
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import ElvEtabHead from "~/components/en-tetes/elvEtabHead";
import {classeContextId, elvContextId, etabContextId, systemThemeContextId, themeContextId} from "~/root";




export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

/*
TODO:
       - préparer le grid-layout général
       - faire en sorte que le header reste en haut de la page même quand on scroll
       - prévoir de la nav dans le header (ou transformer le header en nav bar) avec stack en burger en md
*/


export default component$(() => {


    const etabId = useContext(etabContextId);
    const elvId = useContext(elvContextId);
    const classeId = useContext(classeContextId);
    const theme = useContext(themeContextId)
    const systemTheme = useContext(systemThemeContextId);
    // useContextProvider(systemThemeContextId, systemTheme);

    useTask$(async ({track}) => {
        track(() => etabId.value);
        console.log("In routes layout, etabId.value = ", etabId.value);
    });

    useVisibleTask$(async ({track}) => {
        track(() => theme.value);
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            systemTheme.value = 'dark';
        }
        else {
            systemTheme.value = 'light';
        }

        console.log("In routes layout, localStorage.theme = ", localStorage.theme);
        console.log("In routes layout, systemTheme.value = ", systemTheme.value);
        console.log("In routes layout, theme.value = ", theme.value);
    });

/* Ici je fais un test avec un header dans une grid d'une colonne dans laquelle la deuxième ligne
*  est une grille de 3 colonnes
*/
return (
        <>

                <div class={"grid grid-cols-1"}>

                        <div class={"flex flex-col w-full  max-w-7xl border-2 border-blue-500 self-center justify-self-center"}>
                            <ElvEtabHead nomEtab={etabId.value} nomElv={elvId.value} nomClasse={classeId.value} />
                        </div>

                    <div class={"flex w-full justify-center"}>
                        <div class={"grid grid-cols-3 col px-10 border-2 border-amber-500 max-w-7xl self-center w-full py-2"}>
                            <Slot  />
                        </div>
                    </div>

                </div>
        </>

    );
});
