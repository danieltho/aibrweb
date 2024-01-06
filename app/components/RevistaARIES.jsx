import {StyledText} from "./StyledText";
import exampleImage from "../../public/assets/images/ARIESlogo.png";
import {Button} from "./Button";
import Image from "next/image";
import {Separate} from "./Separate";
import {Acronimo} from "@/app/ui/Acronimo";
import {lato} from "@/app/ui/fonts";

export const RevistaARIES = () => {
    return (
        <div className={`section-default`}>
            <div className={`container m-auto`}>
                <div className="flex flex-col gap-4 xl:gap-x-8 px-4 ">
                    <div className={`flex justify-start items-center gap-2`}>
                        <Image src={exampleImage} width={`60`} height={`60`} alt={`Revista ARIES`}/>
                        <h2 className={`font-bold text-4xl md:text-5xl text-balance leading-none  text-left`}>
                            <Acronimo>Aries</Acronimo>, Anuario de Antropología Iberoamericana
                        </h2>
                    </div>

                    <div className={`flex flex-wrap md:flex-nowrap gap-6 px-4`}>
                        <p className={`${lato.className} antialiased font-light text-lg md:text-2xl text-balance leading-normal`}>
                            La Revista ARIES es una gran plataforma que recoge anualmente cerca de mil referencias de
                            investigación, incluyendo artículos, videos y podcast. Es una de las bases de datos más
                            importantes y actualizadas de antropología en idioma español.
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
        </div>
    )
}