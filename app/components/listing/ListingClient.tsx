"use client"
import { SafeListing, SafeUser } from "@/app/types"
import { useMemo } from "react";
import { categories } from "../navbar/Categories";
import Container from "../Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";
import { BiFace,  } from "react-icons/bi";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "../Button";
import { MdWhatsapp } from "react-icons/md";

interface ListingClientProps{
    // reservations?:Reservation[]
    listing:SafeListing &{user:SafeUser};
    currentUser?:SafeUser|null
}
const ListingClient:React.FC<ListingClientProps> = ({listing,currentUser}) => {
    const category = useMemo(()=>{
        return categories.find((item)=>item.label === listing.category)
    },[listing.category])
    const loginModal = useLoginModal();

  return (
   <Container>
    <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
            <ListingHead title ={listing.title} imageSrc={listing.imageSrc} locationValue={listing.locationValue} id={listing.id}
            currentUser={currentUser}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo user={listing.user} category={category} description={listing.description} locationValue={listing.locationValue} price ={listing.price}/>

            {currentUser?(
            <div className="flex flex-col col-span-3 h-[150px] p-3 border border-neutral-300 rounded-md mt-4">
                <h2 className="text-lg font-semibold">Contact info</h2> 
                <div className="flex flex-row gap-3 items-center text-lg text-blue-500">
                    <BiFace/>
                    {listing.artistFirstName} {listing.artistLastName}
                    
                    </div>  
                <div className="flex flex-row gap-3 items-center text-lg">
                    <MdWhatsapp/>
                    {listing.phoneNo}
                    
                    </div>  
            </div>):(<div className="flex flex-col col-span-3 h-[120px] p-3 border border-neutral-300 rounded-md mt-4"><h2 className="text-lg font-semibold"> For contact info</h2>
             <Button label="Sign In" onClick={loginModal.onOpen}/></div>)}
            

            
        </div>
        
    </div>
   </Container>
  )
}

export default ListingClient 