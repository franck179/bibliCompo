import {component$} from "@builder.io/qwik";
import IntroTests from "~/components/tests/introTests";
import StandaloneLinkBtn from "~/components/buttons/standaloneLinkBtn";
import ItemVueElv from "~/components/tests/itemVueElv";

type Test = {
    nomTest: string;
    id: number;
    status: "enCours" | "termine" | "nouveau";
    level: 1 | 2;
}
function getTests() : Test[] {
    return  [{nomTest: "Test 1", id: 1, status: "enCours", "level": 1},
        {nomTest: "Test 2", id: 2, status: "termine", "level": 2},
        {nomTest: "Test 3", id: 3, status: "nouveau", "level": 1},
        {nomTest: "Test 4", id: 4, status: "termine", "level": 1},
        {nomTest: "Test 5", id: 5, status: "termine", "level": 2},
        {nomTest: "Test 6", id: 6, status: "nouveau", "level": 1},
        {nomTest: "Test 7", id: 7, status: "nouveau", "level": 2},
        {nomTest: "Test 8", id: 8, status: "enCours", "level": 1},
        {nomTest: "Test 9", id: 9, status: "nouveau", "level": 1},];
}

export default component$(() => {
    const listeTests = getTests();
    return (

        <>
            <div class={"grid grid-cols-1 gap-4 mt-4"}>
                <div class={"flex flex-col-reverse md:grid md:grid-cols-2 gap-4 mb-6"}>
                    <IntroTests annee={2023}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl a sapien malesuada pretium. Vivamus
                        vestibulum risus non mi pulvinar, in consectetur nisl pellentesque. Donec luctus urna id libero consequat,
                        id ultrices risus viverra.
                    </IntroTests>
                    <StandaloneLinkBtn href={"../results"}>Profile</StandaloneLinkBtn>
                </div>
                <h1 class={"text-2xl"}>Tests Principaux</h1>
                {listeTests.map((test) => {
                    if (test.level === 1) {
                        return <ItemVueElv key={test.id} nomTest={test.nomTest} status={test.status} percent={Math.round(Math.random()*100)} />
                    }
                }
                )}
                <h1 class={"text-2xl"}>Tests Secondaires</h1>
                {listeTests.map((test) => {
                        if (test.level === 2) {
                            return <ItemVueElv key={test.id} nomTest={test.nomTest} status={test.status} percent={Math.round(Math.random()*100)} />
                        }
                    }
                )}
            </div>
        </>
    )
});