import {component$} from "@builder.io/qwik";
import InsertedLinkBtn from "~/components/buttons/insertedLinkBtn";

interface ArchivesMenuProps {
    annees: number[];
}


export default component$<ArchivesMenuProps>((props) => {
    const annees = props.annees;
    const anneesMenu = annees.map((annee) => {
        return (
            <InsertedLinkBtn href={"/archives/"+annee} >
                {annee}
            </InsertedLinkBtn>
        );
    });
    return (
        <>
            <div class="flex flex-row justify-start items-center bg-gray-700 px-2 py-1">
                <div class={"text-white"}>Archives :</div>
                {anneesMenu}
            </div>
        </>
    );

});