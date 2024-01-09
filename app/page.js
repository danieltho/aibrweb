import {Header} from "./components/Header";
import {CongresoCTA} from "./components/CongresoCTA";
import {RevistaCTA} from "./components/RevistaCTA";
import {RevistaARIES} from "./components/RevistaARIES";

export default function Home() {
    return (
        <div className={`flex flex-col`}>
                <Header/>
                <CongresoCTA/>
                <RevistaCTA/>
                <RevistaARIES/>
        </div>
    )
}
