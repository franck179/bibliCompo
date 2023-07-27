import {component$, Slot} from "@builder.io/qwik";

interface CardProps {
    borderColor?: string;
    style?: "straight" | "rounded";
    bgColor?: string;
    textColor?: string;
}

export default component$<CardProps>(
    (props) => {
        const borderColor = props.borderColor?(props.borderColor):"transparent";
        const style = props.style?(props.style):"rounded";
        const bgColor = props.bgColor?(props.bgColor):"bg-blue-500";
        const textColor = props.textColor?(props.textColor):"";
        return (
            // <div class={"border-2 border-"+borderColor+" "+style+" bg-"+bgColor+" text-"+textColor}>
            //     <Slot />
            // </div>


            <div class=" max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-7xl
             p-6  my-5
             border-2 border-secondary-300
             rounded-lg shadow-lg
             dark:bg-secondary-500 dark:z-10 ">
                <Slot />
            </div>






        );
    }
);