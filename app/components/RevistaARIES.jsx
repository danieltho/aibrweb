import exampleImage from "../../public/assets/images/ARIESlogo.png";
import Image from "next/image";
import {Acronimo} from "@/app/ui/Acronimo";
import {lato} from "@/app/ui/fonts";
import {Chip} from "@nextui-org/react";

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
                        <div className="flex flex-col gap-4 xl:gap-x-8 px-4 ">
                            <p className={`${lato.className} antialiased font-light text-lg md:text-2xl text-balance leading-normal`}>
                                La revista <Acronimo>ARIES</Acronimo> es una gran plataforma que recoge anualmente cerca de mil referencias de investigación, incluyendo artículos, videos y podcast. Es una de las bases de datos más importantes y actualizadas de antropología en idioma español.
                            </p>
                            <h3 className={`${lato.className} antialiased text-2xl font-bold`}>Secciones temáticas</h3>
                            <div className={`flex justify-start flex-wrap items-center gap-2`}>
                                <Chip>Descargas de pdfs</Chip>
                                <Chip>Contacta con autores</Chip>
                                <Chip>Enviar columna de opiniones</Chip>
                                <Chip>Acceso a las comunicaciones</Chip>
                                <Chip>Promociona tus libros</Chip>
                                <Chip>Solicitudes de DOIS</Chip>
                                <Chip>Secciones de artículos</Chip>
                                <Chip>Envio de reseñas de libros`</Chip>
                                <Chip>Videos</Chip>
                                <Chip>Podcasts</Chip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}