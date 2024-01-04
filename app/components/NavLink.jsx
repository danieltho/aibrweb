import Link from "next/link";
import {twMerge} from "tailwind-merge";

const styles = {
    default:
         `text-gray-950
        text-sm 
        hover:text-black 
        transition-colors 
        duration-200`
    ,
    uppercase:`uppercase`,
    active: `text-black`
}
export const NavLink = ({...props}) => {

    const navLinkStyleSheet = twMerge(
        styles.default,
        props.uppercase && styles.uppercase,
        props.active && styles.active
    )
    return (<Link className={
        navLinkStyleSheet
    } href={
        props.path
    }> {
        props.label
    } < /Link>)
}