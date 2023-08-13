"use client"
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types"
import { IconType } from "react-icons"
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BsFilePerson } from "react-icons/bs";

const Map = dynamic(()=>import("../Map"))


interface ListingInfoProps{
    user:SafeUser;
    currentUser?:SafeUser|null;
    description:string;
    category:{
        icon:IconType;
        label:string;
        description:string
    }|undefined
    locationValue:string;
    phone:string;
    artistFirstName:string;
    artistLastName:string
}

const ListingInfo:React.FC<ListingInfoProps>= ({
    user,
    currentUser,
    description,
    category,
    locationValue,
    phone,
    artistFirstName,
    artistLastName
}) => {
    const {getByValue} = useCountries();
    const coordinates = getByValue(locationValue)?.latlng;
    const loginModal = useLoginModal();
    
  return (
    <div className="col-span-8 flex flex-col gap-8">
        <div className="flex flex-col gap-2 p-2">
            <div className="text-xl font-semibold flex flex-row items-center gap-3">
                <div>Listed by {user?.name} </div>
                <Avatar src={user?.image}/>
            </div>
            <div className="text-neutral-500">User since {user?.createdAt.slice(0,4)}</div>
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
        <hr/>
        <div className="text-xl font-semibold flex flex-col col-span-3 border-2 rounded-md shadow-md p-2 bg-white border-blue-500 ">
        Contact Info
        {currentUser ? (<div className="flex flex-col col-span-3 mt-2 pt-2 ">
        <div className="flex flex-row gap-2 justify-start"><BsFilePerson/> {artistFirstName} {artistLastName}</div>
    
        <div className="flex flex-row gap-2 justify-start"><BiLogoWhatsapp/>{phone}</div>
            


        </div>):(<div className="pt-2"><Button onClick={loginModal.onOpen} label="Sign In for Artist contact info"/></div>)}
        </div>

        
    </div>

  )
}

export default ListingInfo