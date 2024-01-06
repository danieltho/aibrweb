import Image from "next/image";
import {Button} from "./Button";
import {lato} from "../ui/fonts";
import Link from "next/link";
import {Acronimo} from "@/app/ui/Acronimo";

export const CongresoCTA = () => {
    return (
        <div className={`section-default`}>
            <div className={`container m-auto`}>
                <div className={`flex justify-center items-center gap-x-4 xl:gap-x-8`}>
                    <Image src={`/congreso.png`}
                           width={`633`}
                           className={`hidden xl:block`}
                           height={`419`}
                           alt={`Congreso`} />
                    <div className={`flex flex-col m-auto lg:max-w-1/2 gap-y-8 px-4 lg:px-0`}>
                        <h1 className={`${lato.className} antialiased font-bold text-4xl md:text-5xl text-pretty leading-none`}>10º Congreso Internacional de Antropología.</h1>
                        <h2 className={`${lato.className} antialiased font-light text-3xl md:text-4xl text-pretty leading-none`}>Madrid, 9-12 de julio de 2024</h2>
                        <p className={`${lato.className} antialiased font-light text-lg md:text-2xl text-pretty leading-normal `}>
                            La nueva edición del Congreso Internacional de Antropología <Acronimo>AIBR</Acronimo> reunirá en Madrid a casi un millar de especialistas en antropología, con énfasis especial en el impacto investigador de la Inteligencia Artificial.
                        </p>
                        <div className={`flex gap-x-2`}>
                            <Link href={`/congreso`}  className={`${lato.className} antialiased font-bold text-2xl py-3 px-6 border rounded-full`}>
                                Más información
                            </Link>
                            <Link href={`/congreso`} className={`${lato.className} antialiased font-bold text-2xl py-3 px-6 border rounded-full`}>
                                Inscribirse
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}