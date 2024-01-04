import * as PropTypes from 'prop-types';
export const Heading = ({children, level, ...restProps}) => {
    let levels = new Set([1, 2, 3, 4, 5, 6]);

    if (!levels.has(level)) {
        level = 1
    }

    const Element = `h${level}`
    return <Element {...restProps}>{children}</Element>
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.string,
    className: PropTypes.string
}