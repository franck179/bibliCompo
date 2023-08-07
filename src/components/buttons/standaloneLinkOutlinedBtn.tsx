import type { QRL} from "@builder.io/qwik";
import {component$, Slot, $} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

interface LinkBtnProps {
    href?: string;
    onClick?: QRL;
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
    const classe = "flex justify-center items-center" +
        " bg-transparent text-accent-300 border-2 border-accent-300" +
        " dark:border-accent-dark dark:text-accent-dark" +
        " text-accent-300 rounded-2xl shadow-lg " +
        "hover:text-accent-200 hover:border-accent-200 " +
        "dark:hover:border-accent-300 dark:hover:text-accent-300" +
        " max-w-4xl max-h-96 py-2 h-full"
    return (

            <Link
                {...props}
                href={props.href}
                onClick$={props.onClick}
                class={classe}>
                <Slot />
            </Link>

            );
    }
);

