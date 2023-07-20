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


export default component$<SpiderResultsProps>((props) => {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 150 150"}  >
                {/*
                    araignée et cercle de base
                */}
                <g stroke-width={1} class={"stroke-black"}>
                    <path d={"M 75 25 L 75 125"}/>
                    <path d={"M 31.7 50 L 118.3 100 "}/>
                    <path d={"M 31.7 100 L 118.3 50 "}/>
                </g>
                <g   fill={"none"} stroke-width={0.7} class={"stroke-gray-300"} >
                    <polyline points={getR(1) + getI(1) + getA(1) + getS(1) + getE(1) + getC(1) + getR(1)} />
                    <polyline points={getR(2) + getI(2) + getA(2) + getS(2) + getE(2) + getC(2) + getR(2)} />
                    <polyline points={getR(3) + getI(3) + getA(3) + getS(3) + getE(3) + getC(3) + getR(3)} />
                    <polyline points={getR(4) + getI(4) + getA(4) + getS(4) + getE(4) + getC(4) + getR(4)} />
                    <polyline points={getR(5) + getI(5) + getA(5) + getS(5) + getE(5) + getC(5) + getR(5)} stroke-width={1} stroke={"black"}/>
                    {/*<circle cx={"75"} cy={"75"} r={"40"} />*/}
                    {/*<circle cx={"75"} cy={"75"} r={"30"} />*/}
                    {/*<circle cx={"75"} cy={"75"} r={"20"} />*/}
                    {/*<circle cx={"75"} cy={"75"} r={"10"} />*/}
                    {/*<circle cx={"75"} cy={"75"} r={"49.5"} stroke-width={1} stroke={"red"}/>*/}
                    {/*<cross cx={"300"} cy={"200"} height={"3"} width={"3"} />*/}
                </g>
                <g  stroke={"black"} text-anchor={"middle"} class={"text-xs font-sans "} >
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
                <g stroke-width={1} fill={"none"} class={"stroke-blue-500"}>
                    <polyline points={getR(props.R) + getI(props.I) + getA(props.A) + getS(props.S) + getE(props.E) + getC(props.C) + getR(props.R)} />
                </g>
            </svg>


        </>
    )
});