
import ImgImageCard from '../../../public/image-card-top.jpg?jsx';
import {component$, useContext, useTask$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LinkBtn from "~/components/buttons/standaloneLinkBtn";
import ElvEtabHead from "~/components/en-tetes/elvEtabHead";
import LogoSmall from "~/components/en-tetes/logoSmall";
import ActionButton from "~/components/buttons/actionButton";
import ItemVueElv from "~/components/tests/itemVueElv";
import {classeContextId, elvContextId, etabContextId} from "~/root";
import IntroTests from "~/components/tests/introTests";
import ArchivesMenu from "~/components/archivesMenu";
import Card from "~/components/cards/card";
import CardTitle from "~/components/cards/card-title";
import CardContent from "~/components/cards/card-content";
import CardActions from "~/components/cards/card-actions";
import CardImage from "~/components/cards/card-image";
import SpiderResults from "~/components/spiderResults";
import InsertedLinkBtn from "~/components/buttons/insertedLinkBtn";
import ThemeSwitcher from "~/components/buttons/themeSwitcher";
import LoginComponent from "~/components/loginComponent";




export default component$(() => {
    // Dans flex uniquement :
    // justify-center : centre horizontalement
    // items-center : centre verticalement


    const nomEtab = "Lycée A. Malraux";
    const nomCompletElv = "Jean Dupont";
    const nomClasse = "1ère A";
    const etabId = useContext(etabContextId);
    const elvId = useContext(elvContextId);
    const classeId = useContext(classeContextId);

    useTask$(async ({track}) => {
        track(() => etabId.value);
        console.log("In accueil index, etabId.value = ", etabId.value);
    });



    return (
        /* Grace au layout.tsx tout ça est englobé dans une page de max 1280px de large et centré
        * Les réglages ici se font par rapport à cette largeur
        *  */
        <>
            <div class="flex justify-center items-center">
                <h1 class={"text-2xl"}>Tests tailwind basics</h1>
            </div>
            <div class={"grid grid-cols-1 gap-2"}>
                <ThemeSwitcher />
                <button
                    class={"bg-blue-500 hover:bg-blue-700 text-white  font-bold my-1 py-2 px-4 rounded"}
                    onClick$={() => {
                        etabId.value = nomEtab;
                    }}
                >
                    Set etabId to "{nomEtab}"
                </button>
                <button
                    class={"bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-2 px-4 rounded"}
                    onClick$={() => {
                        elvId.value = nomCompletElv;
                    }}
                >
                    Set elvId to "{nomCompletElv}"
                </button>
                <button
                    class={"bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-2 px-4 rounded"}
                    onClick$={() => {
                        classeId.value = nomClasse;
                    }}
                >
                    Set classeId to "{nomClasse}
                </button>
            </div>

            <div class={"flex  flex-col space-y-3 border-4 border-fuchsia-800 " }>
                texte sans classe ni div DANS le border fushia
                <div class=" border-4 w-fit p-3 ">div en w-fit p-3 </div>
                {/*<div class={"bg-gradient-to-r from-green-400 from-100% via-100% via-gray-700 to-gray-700"}>*/}
                {/*    gradient*/}
                {/*</div>*/}
            </div>
            <div class={"h-screen"}>
                <h1 class={"text-2xl"}>LinkBtns</h1>
                <h2 class={"text-xl"}>Stratégie de taille</h2>
                <p>Pour que la classe h-full du LinkBtn soit prise en compte, il faut que sa div parente ait une hauteur attribuée</p>
                <p>À cet effet, je met une div de hauteur la totalité de l'écran dans laquelle j'insert une autre div dans laquelle <br/>
                    les hauteurs sont des % de la div parente</p>
                <div class = "grid grid-cols-1 md:grid-cols-2  border-2 py-2 h-1/2 md:h-1/3  xl:h-1/6 gap-4">
                    <div class={"border-2 border-fuchsia-800"}>
                        <LinkBtn  href="/page2" >LinkBtn 1</LinkBtn>
                    </div>
                    <div class={"border-2 border-fuchsia-800"}>
                        <LinkBtn  href="/eleve/accueil">Accueil élève</LinkBtn>
                    </div>
                </div>
                <h2 class={"text-xl"}>Essai positionnement mockup</h2>
                <div class={"grid grid-cols-1 md:grid-flow-col md:grid-cols-2 gap-4 h-1/2 md:h-1/3  xl:h-1/6 justify-stretch"}>
                    <LinkBtn  href="/page2">Score Études</LinkBtn>
                    <LinkBtn  href="/page2">Orientation</LinkBtn>

                    {/*<div class="grid grid-cols-1 gap-4">*/}
                    <div class={"md:row-span-2"}>
                        <LinkBtn  href="/page2">Méthodes de travail</LinkBtn>
                    </div>
                </div>
                <h1 class={"text-2xl"}>En-tête vue élève établissement scolaire</h1>
                <h2 class={"text-xl"}>Lelogo</h2>
                <LogoSmall />
                <h2 class={"text-xl"}>Avec le nom d'une classe</h2>
                <ElvEtabHead nomEtab={nomEtab} nomElv={nomCompletElv} nomClasse={nomClasse}/>
                <h2 class={"text-xl"}>Sans le nom d'une classe</h2>
                <ElvEtabHead nomEtab={nomEtab} nomElv={nomCompletElv} />
                <h1 class={"text-2xl"} >Affichage test</h1>
                <h2 class={"text-xl"}>L'ActionButton</h2>
                <ActionButton action={"commencer"} />
                <ActionButton action={"continuer"} />
                <ActionButton action={"voir"} />
                <h2 class={"text-xl"}>L'itemVueElv pour les tests</h2>
                <ItemVueElv nomTest={"Test 1"} status={"nouveau"} id={1} />
                <ItemVueElv nomTest={"Test 2"} status={"enCours"} id={2}/>
                <ItemVueElv nomTest={"Test 3"} status={"termine"} id={3}/>
                <ItemVueElv nomTest={"Test 4"} status={"enCours"} id={4} percent={77} />
                <h1 class={"text-2xl"}>Composant introTest </h1>
                <IntroTests annee={2023}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl a sapien malesuada pretium. Vivamus
                    vestibulum risus non mi pulvinar, in consectetur nisl pellentesque. Donec luctus urna id libero consequat,
                    id ultrices risus viverra.
                </IntroTests>
                <h1 class={"text-2xl py-2"}>Menu archives </h1>
                <ArchivesMenu annees={[2020,2021,2022]} />
                <h1 class={"text-2xl py-2"}>Essais cards </h1>
                <h2 class={"text-xl py-2"}>Card seule</h2>
                <div class={"py-2"}>
                    <Card borderColor={"red-200"} bgColor={"gray-700"} textColor={"purple-500"} style={"rounded"}>
                        Text dans le Slot
                    </Card>
                </div>
                <h2 class={"text-xl py-2"}>Card avec title</h2>
                <div class={"py-2"}>
                    <Card borderColor={"red-200"} bgColor={"gray-700"} textColor={"purple-500"} style={"rounded"}>
                        <CardTitle>Titre de la carte</CardTitle>
                        Texte hors du titre
                    </Card>
                </div>
                <h2 class={"text-xl py-2"}>Card avec title et content</h2>
                <div class={"py-2"}>
                    <Card>
                        <CardTitle>Titre de la carte</CardTitle>
                        <CardContent>
                            Texte dans le content
                        </CardContent>
                    </Card>
                </div>
                <h2 class={"text-xl py-2"}>Card avec title, content et action</h2>
                <div class={"py-2"}>
                    <Card>
                        <CardTitle>Titre de la carte</CardTitle>
                        <CardContent>
                            Texte dans le content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl a
                            sapien malesuada pretium. Vivamus vestibulum risus non mi pulvinar, in consectetur nisl pellentesque.
                            Donec luctus urna id libero consequat, id ultrices risus viverra.
                        </CardContent>
                        <CardActions mainBtnText={"Démarrer le test"} />
                    </Card>
                </div>
                <h2 class={"text-xl py-2"}>Card avec title, image dans le content et action</h2>
                <div class={"py-2"}>
                    <Card>
                        <CardTitle>Titre de la carte</CardTitle>
                        <CardContent>
                            <div class="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl ">
                                <ImgImageCard class=" w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <p class="mb-3 font-normal">Texte dans le content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl a
                                        sapien malesuada pretium. Vivamus vestibulum risus non mi pulvinar, in consectetur nisl pellentesque.
                                        Donec luctus urna id libero consequat, id ultrices risus viverra.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                        <CardActions mainBtnText={"Démarrer le test"} />
                    </Card>
                </div>
                <h2 class={"text-xl py-2"}>Image Card top avec title, content et action</h2>
                <div class={"py-2"}>
                    <CardImage src={"/image-card-top.jpg"}>
                        <CardTitle>Titre de la carte</CardTitle>
                        <CardContent>
                            Texte dans le content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl a
                            sapien malesuada pretium. Vivamus vestibulum risus non mi pulvinar, in consectetur nisl pellentesque.
                            Donec luctus urna id libero consequat, id ultrices risus viverra.
                        </CardContent>
                        <CardActions mainBtnText={"Démarrer le test"} />
                    </CardImage>
                </div>
                <h1 class="text-2xl py-2">Test svg</h1>
                <div class={"grid grid-cols-1 gap-2"}>
                    <svg height="250" width={"250"}>
                        <path d={"M150 0 L75 200 L225 200 Z"} color={"blue"} />

                    </svg>
                    <div class={"w-1/3"}>
                        <SpiderResults R={2.7} I={3} A={2} S={1} E={3.2} C={2.7} />
                    </div>

                    <div class={"w-2/3"}>
                        <SpiderResults R={2.7} I={3} A={2} S={1} E={3.2} C={2.7} />
                    </div>
                </div>
                <h1 class="text-2xl py-2">Test superposition</h1>
                <div class={"grid grid-cols-1 gap-4"}>
                    <div class="z-0 relative bg-gray-700 rounded-lg" style={{width:"100%"}}>
                        <div class={"z-10 bg-green-700 rounded-bl-lg rounded-tl-lg text-transparent h-full absolute top-0 left-0"} style={{width:"35%"}}>c</div>
                        <div class={" grid grid-cols-3 justify-center  items-center sm:text- md:text-md  lg:text-lg xl:text-xl my-1  text-white  px-3 py-1"}>
                            <div class={"z-20 justify-self-start"}>Test de superposition</div>
                            <div class={"z-20 col-start-2 justify-self-center"}>Commencé</div>
                            <div class={"z-20 col-start-3 justify-self-end"}>
                                <InsertedLinkBtn href={"/page2/"}>Continuer le test</InsertedLinkBtn>
                            </div>
                        </div>
                    </div>
                    <div >next block</div>

                </div>
            </div>
            <LoginComponent />

        </>
    );
});

export const head: DocumentHead = {
    title: "Page 2",
    meta: [
        {
            name: "Page 2 name",
            content: "Page 2 content",
        },
    ],
};
