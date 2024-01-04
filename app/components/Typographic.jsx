import {StyledText} from "./StyledText";


export const Typographic = ({...props}) => {
    const styled = {
        row: `flex justify-between items-center gap-2 border-b border-[#f2f2f2]`,
        td: `flex-1 bg-[#f2f2f2] px-3 py-1`,
    }

    console.log(props)
    return (<>
        <div className={`flex flex-col gap-2`}>

            <div className={styled.row}>
                <div>Heading</div>
                <div className={styled.td}>
                    <StyledText text={`Hello world`}/>
                </div>
            </div>
            <div className={styled.row}>
                <div>Fonts sans</div>
                <div className={styled.td}>
                    <span className={`font-sans`}>Hello  world</span>
                </div>
            </div>
            <div className={styled.row}>
                <div>Fonts mono</div>
                <div className={styled.td}>
                    <span className={`font-mono`}>Hello  world</span>
                </div>
            </div>
            <div className={styled.row}>
                <div>Fonts serif</div>
                <div className={styled.td}>
                    <span className={`font-serif`}>Hello  world</span>
                </div>
            </div>
            <div className={styled.row}>
                <div>Fonts lato</div>
                <div className={styled.td}>
                    <span className={`font-lato`}>Hello  world</span>
                </div>
            </div>

            <div className={styled.row}>
                <article {...props}>
                    <h1>Garlic bread with cheese: What the science tells us</h1>
                    <p>
                        For years parents have espoused the health benefits of eating garlic bread with cheese to their
                        children, with the food earning such an iconic status in our culture that kids will often dress
                        up as warm, cheesy loaf for Halloween.
                    </p>
                    <p>
                        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                        springing up around the country.
                    </p>
                </article>
                <article className="prose prose-slate">
                    <h1>Garlic bread with cheese: What the science tells us</h1>
                    <p>
                        For years parents have espoused the health benefits of eating garlic bread with cheese to their
                        children, with the food earning such an iconic status in our culture that kids will often dress
                        up as warm, cheesy loaf for Halloween.
                    </p>
                    <p>
                        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                        springing up around the country.
                    </p>
                </article>
            </div>

        </div>
    </>)
}