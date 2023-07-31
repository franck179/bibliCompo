import {$, component$, useContext, useSignal, useVisibleTask$} from "@builder.io/qwik";
import LightIcon from "~/components/SVGs/lightIcon";
import DarkIcon from "~/components/SVGs/darkIcon";
import {systemThemeContextId, themeContextId} from "~/root";
import SystemIcon from "~/components/SVGs/systemIcon";

/* ATTENTION
 ce composant repose sur :
  - deux contextes initialisés dans root.tsx
  - un useVisibleTask$ dans layout.tsx qui permet de mettre à jour la class du document en
    fonction de l'option choisie
  - L'utilisation du mode sombre de tailwindcss en mode "class" :
     https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
*/



export default component$(() => {
    const show = useSignal(false);
    const theme = useContext(themeContextId)
    const systemTheme = useContext(systemThemeContextId);
    const delay = $((time: number) => new Promise((res) => setTimeout(res, time)));

    // useVisibleTask$(async ({track}) => {
    //     track(() => {
    //         theme.value;
    //         systemTheme.value;
    //     });
    //     console.log("In dropDownBtn, THEME.VALUE = ", theme.value);
    //     console.log("In dropDownBtn, SYSTEMTHEME.VALUE = ", systemTheme.value);
    // });
    return (

        <div class="flex justify-center">
            <div class="relative inline-block">
                {/*-- Dropdown toggle button --*/}
                <button class={`relative z-10 flex items-center p-2 text-sm text-lm-textColor bg-transparent
                                 border border-transparent rounded-md
                                 focus:border-secondary-400 focus:ring-opacity-40 dark:focus:ring-opacity-40
                                 focus:ring-secondary-200 dark:focus:ring-secondary-300 focus:ring
                                 dark:text-dm-textColor   focus:outline-none`}
                        onfocusout$={() => {
                            delay(250).then(() => show.value = false);
                        }}


                onClick$={() => show.value = !show.value}>
                    <span class="mx-1 fill-accent-300 dark:fill-accent-dark">
                        {theme.value === 'dark' &&  <DarkIcon selected={true} />}
                        {theme.value === 'light' && <LightIcon selected={true} />}
                        {(theme.value === '') && (systemTheme.value === 'dark')  && <DarkIcon  selected={true} />}
                        {(theme.value === '') && (systemTheme.value === 'light') && <LightIcon  selected={true} />}
                    </span>
                    {/*<svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>*/}
                    {/*</svg>*/}
                </button>

                {/*Dropdown menu*/}
                {show.value && (
                <div class="flex flex-col absolute right-0 z-20 w-28 py-2 mt-2 overflow-hidden bg-lm-bg-normal rounded-md shadow-xl dark:bg-dm-bg-normal">
                        <span
                           class={` px-4 py-3 w-fit hover:cursor-pointer text-sm ${(theme.value==='light')?'text-lm-accent':'text-lm-textColor'} capitalize transition-colors duration-200 transform dark:text-onDBackgroundCasual hover:bg-lbgDarker dark:hover:bg-dbgLighter dark:hover:text-onDBackgroundImportant`}
                           onClick$={() => {
                               localStorage.theme = 'light';
                               theme.value = 'light';
                               show.value = false;
                           }} >
                            <LightIcon selected={theme.value==='light'}/> Light
                        </span>

                        <span
                           class={`px-4 py-3 w-fit hover:cursor-pointer text-sm ${(theme.value==='dark')?'text-dm-accent':'text-lm-textColor dark:text-dm-textColor dark:hover:text-onDBackgroundImportant'} capitalize transition-colors duration-200 transform  hover:bg-lm-bg-darker dark:hover:bg-dm-bg-lighter `}
                           onClick$={() => {
                               localStorage.theme = 'dark';
                                  theme.value = 'dark';
                                  show.value = false;
                           }}>
                            <DarkIcon selected={theme.value==='dark'}/> Dark
                        </span>

                        <span
                            class={`px-4 py-3 w-fit hover:cursor-pointer text-sm ${(theme.value==='')?'text-lm-accent dark:text-dm-accent':'text-lm-textColor dark:text-dm-textColor dark:hover:text-onDBackgroundImportant'} capitalize transition-colors duration-200 transform  hover:bg-lm-bg-darker dark:hover:bg-dm-bg-lighter `}
                           onClick$={() => {
                               localStorage.removeItem('theme');
                                  // theme.value = systemTheme.value === 'dark' ? 'darkSys' : 'lightSys';
                               theme.value = '';
                               show.value = false;
                           }}>
                            <SystemIcon selected={theme.value==''}/>  System
                        </span>
                </div>
                )
                }
            </div>
        </div>

);
})