"use client"

import { SafeUser } from "@/app/types"
import useCountries from "@/app/hooks/useCountries";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps{
    title:string;
    locationValue:string;
    imageSrc:string;
    id:string;
    currentUser?:SafeUser|null;
}
const ListingHead:React.FC<ListingHeadProps> =({title,locationValue,imageSrc,id,currentUser})=>{
    const {getByValue} = useCountries();
    const location = getByValue(locationValue);
    return (
    
        <div className="pt-12 mt-8">
            <Heading title={title} subtitle={`${location?.region},${location?.label}`}/>
            <div className="w-full h-[30vh] lg:h-[60vh] overflow-hidden rounded-xl relative mt-2"> 
            <Image fill src={imageSrc} alt={title} className="object-cover w-full "/>
            <div className="absolute top-3 right-3">
                <HeartButton listingId={id} currentUser={currentUser} />
            </div>
            
            </div>
        
        </div>
    )
}

export default ListingHead