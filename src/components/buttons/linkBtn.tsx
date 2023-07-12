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

export default component$<LinkBtnProps>((props) => {
    const classe = "flex justify-center items-center bg-amber-200 rounded-lg shadow-lg hover:bg-amber-400 max-w-4xl max-h-96 py-2 h-full "
    return (

            <Link href={props.href} class={classe}>
                <Slot />
            </Link>

);
});

