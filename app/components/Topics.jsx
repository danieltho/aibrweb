import {StyledText} from "./StyledText";
import {Button} from "./Button";

export const Topics = () => {
    return (
        <div className={`section mt-[20px] mb-[40px]`}>
            <div className={`container m-auto flex flex-col`}>
                <StyledText size={`md`} text={`Secciones temáticas`}/>
                <div className={`flex justify-start flex-wrap items-center gap-2`}>
                    <Button label={`Descargas de pdfs`}/>
                    <Button label={`Contacta con autores`}/>
                    <Button label={`Enviar columna de opiniones`}/>
                    <Button label={`Acceso a las comunicaciones`}/>
                    <Button label={`Promociona tus libros`}/>
                    <Button label={`Solicitudes de DOIS`}/>
                    <Button label={`Secciones de artículos`}/>
                    <Button label={`Envio de reseñas de libros`}/>
                    <Button label={`Videos`}/>
                    <Button label={`Podcasts`}/>
                </div>
            </div>

        </div>
    )
}