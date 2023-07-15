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


            <div class="max-w-sm lg:max-w-md 2xl:max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Slot />
            </div>






        );
    }
);