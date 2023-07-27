
import ImgImageCardTop from '../../assets/images/image-card-top.jpg?jsx';
import {component$, Slot} from "@builder.io/qwik";


interface CardImageProps {
    src:string;
}

export default component$<CardImageProps>((props) => {
    const src = props.src;
    return (
        // <div class="relative">
        //     <img class="w-full h-48 rounded-lg object-cover" src="https://images.unsplash.com/photo-1556740749-887f6717d7e5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="unsplash image" />
        //     <div class="absolute inset-0 bg-gradient-to-t from-blue-900 dark:from-gray-900 via-transparent to-transparent"></div>
        //     <div class="absolute inset-0 px-6 pb-6 flex items-end">
        //         <h1 class="text-4xl font-bold tracking-wide text-white">Lorem ipsum dolor sit amet</h1>
        //     </div>
        // </div>

        <>

            <div class="max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-7xl
                my-5
              rounded-lg shadow-lg
              border-b-2 border-r-2 border-l-2 border-secondary-300
              dark:bg-secondary-500 dark:z-10">
                <ImgImageCardTop class="rounded-t-lg border-t-2 border-secondary-300" alt=""/>
                <div class="p-5  ">
                    <Slot />
                </div>
            </div>
        </>

    )
    });