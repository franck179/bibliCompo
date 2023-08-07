import {component$, Slot, useSignal, useTask$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

interface InsertedLinkBtnProps {
    href?: string;
    dm_color?: "onPrimary" | "onSecondary" | "onBg" | "onAccent";
    lm_color?: "onPrimary" | "onSecondary" | "onBg" | "onAccent";
}

/**
 * La hauteur du bouton va dépendre de la div parente dans laquelle il se trouve dans certaines limites :
 *
 * max-w-lg	max-width: 32rem; - 512px
 * maw-h-96 max-height: 24rem; - 384px
 *
 * **/

export default component$<InsertedLinkBtnProps>(
    (props) =>
    {
        const color = useSignal("text-lm-textColor dark:text-dm-textColor");
        const dm_color = useSignal("text-dm-textColor");
        const lm_color = useSignal("text-lm-textColor");
        const classe = useSignal("");

        useTask$(async () => {
            if (props.dm_color || props.dm_color) {
                switch (props.dm_color) {
                    case "onAccent":
                        dm_color.value = "text-dm-textOnAccent";
                        break;
                    default:
                        dm_color.value = "text-dm-textColor";
                        break;
                }
                switch (props.lm_color) {
                    case "onAccent":
                        lm_color.value = " text-lm-textOnAccent";
                        break;
                    default:
                        lm_color.value = " text-lm-textColor";
                        break;
                }
            }
            color.value = lm_color.value + " dark:" + dm_color.value;
            "flex justify-center items-center bg-transparent rounded-lg hover:font-bold p-2 max-w-lg max-h-lg " + color.value;
        });

        // const classe = "flex justify-center items-center bg-transparent rounded-lg hover:font-bold p-2 max-w-lg max-h-lg " + color.value;
        return (

                <Link href={props.href} class={classe.value}>
                    <Slot />
                </Link>

        );
    }
);

