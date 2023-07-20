
import ImgImageCardTop from '../../../public/image-card-top.jpg?jsx';
import {component$, Slot} from "@builder.io/qwik";
import Card from "~/components/cards/card";

interface CardImageProps {
    place:"top"|"left"|"right"|"bottom";
    src:string;
}

export default component$<CardImageProps>((props) => {
    const place = props.place.toString();
    const src = props.src;
    const test = "top"||"bottom";
    return (
        // <div class="relative">
        //     <img class="w-full h-48 rounded-lg object-cover" src="https://images.unsplash.com/photo-1556740749-887f6717d7e5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="unsplash image" />
        //     <div class="absolute inset-0 bg-gradient-to-t from-blue-900 dark:from-gray-900 via-transparent to-transparent"></div>
        //     <div class="absolute inset-0 px-6 pb-6 flex items-end">
        //         <h1 class="text-4xl font-bold tracking-wide text-white">Lorem ipsum dolor sit amet</h1>
        //     </div>
        // </div>

        <>
        {((place==="top")||(place==="bottom"))&&
            <div class="max-w-sm lg:max-w-md 2xl:max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {(place==="top")&&<ImgImageCardTop class="rounded-t-lg" alt=""/>}
                <div class="p-5">
                    <Slot />
                </div>
                {(place==="bottom")&&<ImgImageCardTop class="rounded-b-lg" alt=""/>}
            </div>
        }
            {((place==="left")||(place==="right"))&&
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class=" rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={src} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <Slot />
                        </div>
                </div>

            }
        </>

    )
    });