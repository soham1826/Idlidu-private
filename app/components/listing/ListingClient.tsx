"use client"
import { SafeListing, SafeUser } from "@/app/types"
import { useMemo } from "react";
import { categories } from "../navbar/Categories";
import Container from "../Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";

interface ListingClientProps{
    // reservations?:Reservation[]
    listing:SafeListing &{user:SafeUser};
    currentUser?:SafeUser|null
}
const ListingClient:React.FC<ListingClientProps> = ({listing,currentUser}) => {
    const category = useMemo(()=>{
        return categories.find((item)=>item.label === listing.category)
    },[listing.category])

  return (
   <Container>
    <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
            <ListingHead title ={listing.title} imageSrc={listing.imageSrc} locationValue={listing.locationValue} id={listing.id}
            currentUser={currentUser}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo user={listing.user} category={category} description={listing.description} locationValue={listing.locationValue} phone={listing.phoneNo} currentUser={currentUser} artistFirstName={listing.artistFirstName} artistLastName={listing.artistLastName}/>


        </div>

    </div>
   </Container>
  )
}

export default ListingClient 