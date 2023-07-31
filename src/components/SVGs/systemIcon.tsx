import {component$} from "@builder.io/qwik";

export default component$((props:{selected ?: boolean}) => {
    const selected = props.selected?props.selected:false;
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34.48 30.45"

                class={`inline-block h-6 w-6 ${selected?"fill-lm-accent dark:fill-dm-accent":"fill-lm-textColor dark:fill-dm-textColor"} `}
                id="lcd">
                    <g data-name="Layer 2">
                        <path d="M32.68 0H1.8A1.81 1.81 0 0 0 0 1.8v22.74a1.81 1.81 0 0 0 1.8 1.81h11.27v2.08H9.23v2h16v-2h-3.82v-2.08h11.27a1.81 1.81 0 0 0 1.8-1.81V1.8a1.81 1.81 0 0 0-1.8-1.8Zm-1.51 23H3.31V3.31h27.86Z" data-name="Layer 1">
                        </path>
                    </g>
            </svg>
        </>
            );
})


