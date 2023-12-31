import {component$} from "@builder.io/qwik";


interface SpiderResultsProps {
    R: number;
    I: number;
    A: number;
    S: number;
    E: number;
    C: number;
}

function getRx(note: number) : number {
    return 75;
}
function getRy(note: number) : number {
    return 75 - 10*note
}
function getR(note: number) : string {
    return `${getRx(note)} ${getRy(note)} `
}
function getIx(note: number) : number {
    return 75 + note*5*Math.sqrt(3)
}
function getIy(note: number) : number {
    return 75 - 5*note;
}
function getI(note: number) : string {
    return `${getIx(note)} ${getIy(note)} `
}
function getAx(note: number) : number {
    return getIx(note);
}
function getAy(note: number) : number {
    return 75 + 5*note;
}
function getA(note: number) : string {
    return `${getAx(note)} ${getAy(note)} `
}
function getSx(note: number) : number {
    return 75;
}
function getSy(note: number) : number {
    return 75 + 10*note;
}
function getS(note: number) : string {
    return `${getSx(note)} ${getSy(note)} `
}
function getEx(note: number) : number {
    return 75 - note*5*Math.sqrt(3);
}
function getEy(note: number) : number {
    return getAy(note);
}
function getE(note: number) : string {
    return `${getEx(note)} ${getEy(note)} `
}
function getCx(note: number) : number {
    return getEx(note);
}
function getCy(note: number) : number {
    return getIy(note);
}
function getC(note: number) : string {
    return `${getCx(note)} ${getCy(note)} `
}

/*
* Il y a un parti pris dans la réalisation du svg : celui-ci est défini dans une viewBox de 150x150
* et on considère qu'il y a une marge de 25 de chaque côté.
* L'araignée est donc définie par les points suivants dans un carré de 100x100:
* R : 75 25
* I : 118.3 50 où 118.3 = 25 + 50 + 10*5*Math.sqrt(3)/2 = 75 + 50*cos(30°)
* A : 118.3 100 où 118.3 = 25 + 50 + 10*5*Math.sqrt(3)/2 = 75 + 50*cos(30°)
* S : 75 125
* E : 31.7 100 où 31.7 = 75 - 50*cos(30°)
* C : 31.7 50 où 31.7 = 75 - 50*cos(30°)*
*
* */


export default component$<SpiderResultsProps>((props) => {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 150 150"}  >
                {/*
                    araignée et cercle de base
                */}
                <g stroke-width={1} class={"stroke-lm-textColor dark:stroke-dm-primary-normal"} >
                    <path d={"M 75 25 L 75 125"}/>
                    <path d={"M 31.7 50 L 118.3 100 "}/>
                    <path d={"M 31.7 100 L 118.3 50 "}/>
                </g>
                <g   fill={"none"} stroke-width={0.7} class={"stroke-lm-secondary"} >
                    <polyline points={getR(1) + getI(1) + getA(1) + getS(1) + getE(1) + getC(1) + getR(1)} />
                    <polyline points={getR(2) + getI(2) + getA(2) + getS(2) + getE(2) + getC(2) + getR(2)} />
                    <polyline points={getR(3) + getI(3) + getA(3) + getS(3) + getE(3) + getC(3) + getR(3)} />
                    <polyline points={getR(4) + getI(4) + getA(4) + getS(4) + getE(4) + getC(4) + getR(4)} />
                    <polyline points={getR(5) + getI(5) + getA(5) + getS(5) + getE(5) + getC(5) + getR(5)} stroke-width={1} class={"stroke-lm-textColor dark:stroke-dm-primary-normal"}/>

                </g>
                <g   text-anchor={"middle"} class={"text-xs font-sans stroke-lm-textColor dark:stroke-dm-primary-normal"} >
                    <text x={getRx(5.4)} y={getRy(5.4)} dx={0} dy={2}>R</text>
                    <text x={getIx(5.4)} y={getIy(5.4)} dx={0} dy={4}>I</text>
                    <text x={getAx(5.4)} y={getAy(5.4)} dx={0} dy={4}>A</text>
                    <text x={getSx(5.4)} y={getSy(5.4)} dx={0} dy={6}>S</text>
                    <text x={getEx(5.4)} y={getEy(5.4)} dx={-2} dy={4}>E</text>
                    <text x={getCx(5.4)} y={getCy(5.4)} dx={-2} dy={4}>C</text>
                </g>

                {/*
                    Les notes
                */}
                <g stroke-width={1} fill={"none"} class={"stroke-lm-accent "}>
                    <polyline points={getR(props.R) + getI(props.I) + getA(props.A) + getS(props.S) + getE(props.E) + getC(props.C) + getR(props.R)} />
                </g>
            </svg>


        </>
    )
});