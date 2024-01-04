import {StyledText} from "./StyledText";
import exampleImage from "../../public/assets/images/ARIESlogo.png";
import {Button} from "./Button";
import Image from "next/image";
import {Separate} from "./Separate";

export const RevistaARIES = () => {
    return (
        <div className={`section `}>
            <div className={`container m-auto mt-[20px]`}>

                <div className={`flex justify-start items-center gap-2`}>
                    <Image src={exampleImage} width={`60`} height={`60`} alt={`Revista ARIES`}/>
                    <StyledText size={`xl`} text={`ARIES, Anuario de Antropología Iberoamericana`}/>
                </div>

                <div className={`grid grid-cols-2 gap-2`}>
                    <p>
                        <StyledText size={`md`}
                                    text={`La Revista ARIES es una gran plataforma que recoge anualmente cerca de mil referencias de investigación, incluyendo artículos, videos y podcast. Es una de las bases de datos más importantes y actualizadas de antropología en idioma español.`}/>
                    </p>
                    <div className={`flex justify-center flex-wrap items-center gap-2`}>
                        <Button primary label={`Descargas de pdfs`}/>
                        <Button primary label={`contacto con autores`}/>
                        <Button primary label={`Columnas de opinion`}/>
                        <Button primary label={`Comunicaciones en congresos`}/>
                        <Button primary label={`Promoción de libros`}/>
                        <Button primary label={`Solicitudes de DOIS`}/>
                        <Button primary label={`Artículos`}/>
                        <Button primary label={`Envio de reseñas de libros`}/>
                        <Button primary label={`Videos`}/>
                        <Button primary label={`Podcasts`}/>
                    </div>
                </div>

            </div>
        </div>
    )
}