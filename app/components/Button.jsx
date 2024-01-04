import { twMerge } from 'tailwind-merge';
import {lato} from "../ui/fonts";

const styles = {
    colorPrimary:`
        text-aibr-1000
        border-aibr-1000
        hover:bg-aibr-1000
        hover:text-white
        `,
    colorPrimaryActive:`
        bg-aibr-1000
        text-white
        border-aibr-1000
        hover:bg-white
        hover:text-aibr-1000
        `,
    colorSecondary:`
        text-white
        bg-gray-600
        
        `,
    default: `
        bg-transparent
        hover:bg-gray-50
        text-black
        hover:text-black
        text-2xl
        leading-none
        ${lato.className}
        py-2
        px-4
        border
        border-gray-950
        rounded-full
    `,
    
}

export const Button = ({...props} ) =>{
    const textStyle = twMerge(
        styles.default,
        props.primary && styles.colorPrimary,
        props.secondary && styles.colorSecondary,
        props.primary && props.active && styles.colorPrimaryActive,
    );

    return <button className={textStyle}>{props.label}</button>
}