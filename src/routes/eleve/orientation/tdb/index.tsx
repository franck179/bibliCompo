import {component$} from "@builder.io/qwik";
import IntroTests from "~/components/tests/introTests";
import ItemVueElv from "~/components/tests/itemVueElv";

export type Test = {
    nomTest: string;
    id: number;
    status: "enCours" | "termine" | "nouveau";
    level: 1 | 2;
    texte: string;
}
export function getTests() : Test[] {
    const lorem = "Lorem ipsum dolor sit amet. Est impedit veniam id ratione minus et placeat alias. Quo sapiente quos ut ipsam voluptas ut fugit saepe non quas explicabo.\n" +
        "\n" +
        "Sed quia dolorem et consequuntur nihil id dolorem illo aut fugit eaque?" +
        " Est voluptatem aliquam vel omnis ratione sit dolor voluptatem et repudiandae maiores? " +
        "Vel repellendus doloremque in impedit eligendi sed adipisci aperiam et sint placeat non " +
        "eius nihil sed earum molestiae qui quod ullam."
    return  [
        {nomTest: "Mes Compétences principales", id: 1, status: "nouveau", "level": 1,
        texte: "Ce test a pour but de vous faire découvrir les champs de compétences majeurs que vous pourriez utiliser dans votre futur métier.\n" +
            "    Il comporte 4 rubriques :\n" +
            "    \n" +
            "    - Intérêt et Activités\n" +
            "    - Aptitudes\n" +
            "    - Personnalité\n" +
            "    - Métiers\n" +
            "\n" +
            "    Ce test d'autoévaluation va vous permettre de mieux vous connaître, mais les résultats ne doivent pas être pris comme une vérité absolue.\n" +
            "\n" +
            "    Il faut considérer ces résultats comme des hypothèses sachant que d'autres tests viendront les préciser.\n" +
            "\n" +
            "    Il faudra compter une demie heure pour effectuer ce test.\n" +
            "\n" +
            "    A vous maintenant !"},
        {nomTest: "Mes Résultats scolaires", id: 2, status: "nouveau", "level": 1,
        texte:"Les résultats scolaires ont une importance dans le choix des études pour parvenir au projet personnel que vous déterminerez.\n" +
            "    Il faut regarder l’ensemble des résultats de votre parcours scolaire et universitaire.\n" +
            "    Votre dernière année d’étude ou même la précédente sont insuffisantes : vos points forts et points faibles peuvent évoluer dans le temps."},
        {nomTest: "Test 3", id: 3, status: "enCours", "level": 2, texte:lorem},
        {nomTest: "Test 4", id: 4, status: "termine", "level": 1, texte:lorem},
        {nomTest: "Test 5", id: 5, status: "termine", "level": 2, texte:lorem},
        {nomTest: "Test 6", id: 6, status: "enCours", "level": 1, texte: lorem},
        {nomTest: "Test 7", id: 7, status: "enCours", "level": 2, texte: lorem},
        {nomTest: "Mes Motivations Scolaires et universitaires", id: 8, status: "nouveau", "level": 1,
        texte:"Ce test va vous permettre de repérer ce qui vous motive ou non dans votre travail scolaire ou universitaire.\n" +
            "    Il faudra choisir parmi trente propositions.\n" +
            "    Bonne lecture !"},
        {nomTest: "Test 9", id: 9, status: "nouveau", "level": 1, texte: lorem},];
}

export default component$(() => {
    const listeTests = getTests();
    return (

        <>
            {/*<div class={"grid grid-cols-1 gap-4 mt-4"}>*/}
                <div class={"flex flex-col-reverse md:grid md:grid-cols-1 gap-4 mb-6 md:col-span-2"}>
                    <IntroTests annee={2023}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl a sapien malesuada pretium. Vivamus
                        vestibulum risus non mi pulvinar, in consectetur nisl pellentesque. Donec luctus urna id libero consequat,
                        id ultrices risus viverra.
                    </IntroTests>
                </div>
                <div class={"md:col-span-2"}>
                    <h1 class={"text-2xl"}>Tests Principaux</h1>
                    {listeTests.map((test) => {
                        if (test.level === 1) {
                            return <ItemVueElv key={test.id} nomTest={test.nomTest} status={test.status} id={test.id} percent={Math.round(Math.random()*100)} />
                        }
                    }
                    )}
                </div>
            <div class={"md:col-span-2"}>
                <h1 class={"text-2xl"}>Tests Secondaires</h1>
                {listeTests.map((test) => {
                        if (test.level === 2) {
                            return <ItemVueElv key={test.id} nomTest={test.nomTest} status={test.status} id={test.id} percent={Math.round(Math.random()*100)} />
                        }
                    }
                )}
            </div>
            {/*</div>*/}
        </>
    )
});