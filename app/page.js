import {Header} from "@/app/components/Header";
import {CongresoCTA} from "@/app/components/CongresoCTA";
import {RevistaCTA} from "@/app/components/RevistaCTA";
import {RevistaARIES} from "@/app/components/RevistaARIES";
import {Separate} from "@/app/components/Separate";
import {Topics} from "@/app/components/Topics";

export default function Home() {
    return (
        <div className={`flex flex-col`}>
                <Header/>
                <CongresoCTA/>
                <RevistaCTA/>
                <RevistaARIES/>
                <Separate/>
                <Topics/>
        </div>
    )
}
