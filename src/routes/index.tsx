
import {component$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";




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
        <div class={"border border-secondary-400 m-2 bg-emerald-100 px-10 py-20  row-span-full flex items-center justify-center "}>
            <div>
                <b>px-10 py-20  row-span-3 flex items-center justify-center</b><br />
                Lorem ipsum dolor sit amet, consectetur ad ipiscing elit. Morbi et nisl a sapien malesuada
                pretium. Vivamus vestibulum risus non mi pulvinar, in consectetur nisl pellentesque.
                Donec luctus urna id libero consequat, id ultrices risus viverra.
            </div>
        </div>
        <div class={"border border-secondary-400 m-2 p-2 text-center"}>
            <b>text-center</b>
            <div>Autre div</div>
        </div>
        <div class={"border border-secondary-400 m-2 p-2 bg-emerald-100 flex flex-col gap-2 justify-self-center"}>
            <b>flex flex-col gap-2 <u>justify-self-center</u></b>
            <div>Autre div</div>
        </div>
        <div class={"border border-secondary-400 m-2 p-2 bg-emerald-100 flex flex-col gap-2 justify-center"}>
            <b>flex flex-col gap-2 <u>justify-center</u></b>
            <div>Autre div</div>
        </div>
        <div class={"border border-secondary-400 m-2 p-2 bg-emerald-100 flex flex-col gap-2 items-center"}>
            <b>flex flex-col gap-2 <u>items-center</u></b>
            <div>Autre div</div>
        </div>
        <div class={"border border-secondary-400 m-2 p-2 col-span-2 flex flex-col"}>
            <b>col-span-2 flex flex-col</b>
            <div class={"self-center"}>
                div : self-center
            </div>
            <div class={"justify-self-center border border-accent-300"}>
                div : justify-self-center
            </div>
        </div>
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
