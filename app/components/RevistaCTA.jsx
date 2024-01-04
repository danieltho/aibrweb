import {StyledText} from "./StyledText";
import {Button} from "./Button";
import Image from "next/image";
import exampleImage from "../../public/assets/images/image_34.png";

export const RevistaCTA = ({...props}) => {
    return (<div className="section-default">
        <div className="container flex flex-col gap-2 m-auto">
            <StyledText size={`xl`} text={`AIBR, Revista de Antropología Iberoamericana`} />
            <div className={`flex justify-start items-center gap-2`}>
                <StyledText size={`md`} text={`Números recientes.`} />
                <div className={`flex gap-1`}>
                    <Button label={`Archivo`}  />
                    <Button label={`Consejo`}  />
                    <Button label={`Indices`}  />
                    <Button label={`Manuscritos`}  />
                    <Button label={`Autores`}  />
                </div>
            </div>
            <div className={`grid grid-cols-5 gap-1`}>
                <Image src={exampleImage} width={260} height={`auto`} alt={``} />
                <Image src={exampleImage} width={260} height={`auto`} alt={``} />
                <Image src={exampleImage} width={260} height={`auto`} alt={``} />
                <Image src={exampleImage} width={260} height={`auto`} alt={``} />
                <Image src={exampleImage} width={260} height={`auto`} alt={``} />
            </div>
        </div>
    </div>)
}