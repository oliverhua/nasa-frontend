import background from './ResultBackground.svg'
import {Image} from "@nextui-org/react";
export default function Result(){
    return (
    <div className=" ">
        <div className="h-screen w-screen bg-cover bg-no-repeat" style={{ background:`url(${background})`}}>
            <div></div>
            <div></div>
        </div>
    </div>
        
    );

}