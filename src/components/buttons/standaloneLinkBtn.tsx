import {component$, Slot, useSignal} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

interface LinkBtnProps {
    href?: string;
    color?: "primary" | "secondary" | "accent";
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
        const color = useSignal("bg-lm-primary-normal dark:bg-dm-primary-normal text-lm-textColor dark:text-dm-textColor")

        switch (props.color) {
            case "secondary":
                color.value = "bg-lm-secondary dark:bg-dm-secondary text-lm-textColor dark:text-dm-textColor";
                break;
            case "accent":
                color.value = "bg-lm-accent dark:bg-dm-accent text-lm-textOnAccent dark:text-dm-textOnAccent";
                break;
            case "primary":
            default:
                color.value = "bg-lm-primary-normal dark:bg-dm-primary-normal text-lm-textColor dark:text-dm-textColor";
                break;
        }

        const classe = "flex justify-center items-center " +
            " text-center rounded-2xl shadow-lg dark:z-10 max-w-4xl max-h-96 p-2 h-full" +
            " lg:text-2xl md:text-xl sm:text-lg text-md " + color.value;
        return (
            <>
                <Link href={props.href} class={classe}>
                    <Slot />
                </Link>
            </>

        );
    }
);

