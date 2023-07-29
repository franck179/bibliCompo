import {component$, Slot} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

interface LinkBtnProps {
    href?: string;
}

/**
 * La hauteur du bouton va dépendre de la div parente dans laquelle il se trouve dans certaines limites :
 *
 * max-w-lg	max-width: 32rem; - 512px
 * maw-h-96 max-height: 24rem; - 384px
 *
 * **/

export default component$<LinkBtnProps>(
    (props) =>
    {
    const classe = "flex justify-center items-center bg-accent-300 dark:bg-accent-dark " +
        "dark:text-onAccent/[87] text-onAccent text-center rounded-2xl shadow-lg " +
        "dark:z-10 hover:bg-accent-200  max-w-4xl max-h-96 p-2 h-full" +
        " lg:text-2xl md:text-xl sm:text-lg text-md";
    return (

            <Link href={props.href} class={classe}>
                <Slot />
            </Link>

            );
    }
);

