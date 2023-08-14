"use client"
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types"
import { IconType } from "react-icons"
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";


const Map = dynamic(()=>import("../Map"))


interface ListingInfoProps{
    user:SafeUser;
    description:string;
    category:{
        icon:IconType;
        label:string;
        description:string
    }|undefined
    locationValue:string;
    price:number
}

const ListingInfo:React.FC<ListingInfoProps>= ({
    user,
    description,
    category,
    locationValue,
    price
}) => {
    const {getByValue} = useCountries();
    const coordinates = getByValue(locationValue)?.latlng;
    
  return (
    <div className="col-span-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2 p-2">
            <div className="text-xl font-semibold flex flex-row items-center gap-3">
                <div>Listed by {user?.name} </div>
                <Avatar src={user?.image}/>
            </div>
            <div className="text-neutral-500">User since {user?.createdAt.slice(0,4)}</div>
            <div className="w-1/2 font-semibold rounded-md border border-neutral-200 p-3 shadow-md">₹ {price}/Hour</div>
        </div>
        <hr/>
        {category && (
            <ListingCategory icon={category.icon}
            label={category.label} description={category.description}/>
        )}
        <hr/>
        <div className="text-lg font-light text-neutral-500 flex flex-col">
            <h2 className="text-black font-semibold">Description</h2>
            <h2>{description}</h2>
        </div>
        <hr/>
        <div className=" text-lg flex flex-col">
            <h2 className="text-black font-semibold mb-3">My location</h2>
            <Map center={coordinates}/>
        </div>
    
        


        
    </div>

  )
}

export default ListingInfo