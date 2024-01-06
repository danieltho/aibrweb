import Image from "next/image";
import exampleImage from "../../public/assets/images/image_34.png";
import {Link, Button} from "@nextui-org/react";
import {gothic_a1, lato, libre_franklin, trade_gothic} from "../ui/fonts";

export const RevistaCTA = ({...props}) => {
    return (<div className="section-default">
        <div className={`container m-auto`}>
            <div className="flex flex-col gap-4 xl:gap-x-8 ">
                <h2 className={`${lato.className} antialiased font-bold text-4xl md:text-5xl text-balance leading-none  text-center sm:text-left`}>
                    <span className={`${trade_gothic.className} tracking-tighter`}>AIBR</span>, Revista de Antropología Iberoamericana</h2>
                <div className={`flex justify-start items-center gap-2 justify-center sm:justify-start`}>
                    <p className={`${lato.className} antialiased font-light text-lg md:text-2xl text-pretty leading-normal`}>Números
                        recientes</p>

                </div>
                <div className={`flex flex-wrap gap-4 justify-center sm:justify-start`}>
                    <Image src={exampleImage} width={234} height={`auto`} alt={``}/>
                    <Image src={exampleImage} width={234} height={`auto`} alt={``}/>
                    <Image src={exampleImage} width={234} height={`auto`} alt={``}/>
                    <Image src={exampleImage} width={234} height={`auto`} alt={``}/>
                    <Image src={exampleImage} width={234} height={`auto`} alt={``}/>
                    <Image src={exampleImage} width={234} height={`auto`} alt={``}/>
                </div>
            </div>
        </div>
    </div>)
}