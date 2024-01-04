import Image from "next/image";
import {Button} from "./Button";
import {lato} from "../ui/fonts";
import Link from "next/link";

export const CongresoCTA = () => {
    return (
        <div className={`section-default`}>
            <div className={`container m-auto`}>
                <div className={`flex justify-center items-center gap-x-[15px] xl:gap-x-[30px]`}>
                    <Image src={`/congreso.png`}
                           width={`633`}
                           className={`hidden xl:block`}
                           height={`419`}
                           alt={`Congreso`} />
                    <div className={`flex flex-col m-auto lg:max-w-[632px] gap-y-[37px] px-4 lg:px-0`}>
                        <h1 className={`${lato.className} antialiased font-bold text-[39px] md:text-[50px] text-pretty leading-[95%]`}>10º Congreso Internacional de Antropología.</h1>
                        <h2 className={`${lato.className} antialiased font-light text-[30px] md:text-[40px] text-pretty leading-[95%]`}>Madrid, 9-12 de julio de 2024</h2>
                        <p className={`${lato.className} antialiased font-light text-[18px] md:text-[24px] text-pretty `}>
                            La nueva edición del Congreso Internacional de Antropología AIBR reunirá en Madrid a casi un millar de especialistas en antropología, con énfasis especial en el impacto investigador de la Inteligencia Artificial.
                        </p>
                        <div className={`flex gap-x-2`}>
                            <Link href={`/congreso`}  className={`${lato.className} antialiased font-bold text-2xl py-[12px] px-[24px] border rounded-full`}>
                                Más información
                            </Link>

                            <Button primary active label={`Inscribirse`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}