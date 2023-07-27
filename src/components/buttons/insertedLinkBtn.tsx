import {component$, Slot} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

interface InsertedLinkBtnProps {
    href?: string;
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
    const classe = "flex justify-center items-center bg-transparent rounded-lg hover:font-bold text-onPrimary dark:text-onPrimary/[87] p-2 max-w-lg max-h-lg"
    return (

            <Link href={props.href} class={classe}>
                <Slot />
            </Link>

            );
    }
);

