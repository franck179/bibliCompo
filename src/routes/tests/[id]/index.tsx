import {component$, useSignal} from "@builder.io/qwik";
import {useLocation} from "@builder.io/qwik-city";
import type { Test} from "~/routes/eleve/orientation/tdb";
import {getTests} from "~/routes/eleve/orientation/tdb";
import CardTitle from "~/components/cards/card-title";
import CardContent from "~/components/cards/card-content";
import CardActions from "~/components/cards/card-actions";
import Card from "~/components/cards/card";

function formatToHtml(input: string): string {
    const paragraphs = input.split("\n");
    const html = paragraphs.map(paragraph => `<p>${paragraph}</p>`);
    return html.join("");
}

export default component$(() => {
    const id = useLocation().params.id;
    const listeTest = getTests();
    const emptyTest: Test = {nomTest: '', id: 0,status: "enCours", level:1,texte:""};
    const currentTest = useSignal(emptyTest);
    listeTest.map((t) => {
        if (t.id.toString() == id){
            currentTest.value = t;
        }
    });
    return (
        <div class={"flex flex-col items-center"}>
            <Card >
                <CardTitle>{currentTest.value.nomTest}</CardTitle>
                <CardContent>
                    <div dangerouslySetInnerHTML={formatToHtml(currentTest.value.texte)}></div>
                </CardContent>
                <CardActions mainBtnText={"Démarrer le test"} />
            </Card>
        </div>
        );
    }
)