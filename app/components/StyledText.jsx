import {twMerge} from "tailwind-merge";

const styles = {
    default:`tracking-tighter leading-none`,
    heading: {
        xl: `font-times text-[65px]`,
        md: `font-helvetica text-[24px]`,
    }
}
export const StyledText = ({size, text, ...props}) => {
    const styleText = twMerge(
        styles.default,
        size === 'xl' && styles.heading.xl,
        size === 'md' && styles.heading.md
    )

    return (<span className={styleText} {...props}>{text}</span>)
}