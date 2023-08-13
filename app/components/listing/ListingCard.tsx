"use client"

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeUser } from "@/app/types";
import { Listing } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import HeartButton from "../HeartButton";
import prisma from "@/app/libs/prismadb"

interface ListingCardProps {
    data:SafeListing;
    // reservation?:Reservation;
    onAction?:(id:string)=>void;
    disabled?:boolean;
    actionLabel?:string;
    actionId?:string;
    currentUser?:SafeUser |null;
}


const ListingCard:React.FC<ListingCardProps> = ({data,onAction,disabled,actionLabel,actionId="",currentUser}) => {

    const router = useRouter();
    const{getByValue} = useCountries();
    const location = getByValue(data.locationValue);

    const handleCancel = useCallback((e:React.MouseEvent<HTMLButtonElement>)=>{e.stopPropagation();
    if(disabled){
        return
    }

    onAction?.(actionId);
    
    },[onAction,actionId,disabled])

    // const price = useMemo(()=>{
    //     if()
    // })
    // const hostuser = prisma.user.findFirst({
    //     where:{
    //         id : data.userId
    //     }
    // })
    // console.log(hostuser)



  return (
    <div  onClick ={()=> router.push(`/listings/${data.id}`)}className="col-span-1 cursor-pointer group">

        <div className="flex flex-col gap-2 w-full border border-grey-200 rounded-lg">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                <Image  fill alt="Listing" src={data.imageSrc} className="object-cover h-full w-full group-hover:scale-110 transition p-2" />
                <div className="absolute top-3 right-3">
                    <HeartButton currentUser={currentUser} listingId = {data.id}/>
                </div>

            </div>
            <div className="font-bold text-lg text-blue-500 pl-2">{data.title}</div>
            <div className="font-semibold text-lg pl-2">{location?.region} , {location?.label}</div>
            <div className="font-semibold text-lg my-2 p-2 bg-slate-200 rounded-md">₹ {data.price}/Hour</div>
        </div>
    </div>
  )
}

export default ListingCard