import getListingByID from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "@/app/components/listing/ListingClient";

interface Iparams {
    listingId?:string;
}

const ListingPage = async({params}:{params:Iparams}) => {
    const listing = await getListingByID(params)
    const currentUser = await getCurrentUser();
    if(!listing){
        return(
            <ClientOnly>
                <EmptyState title="Something went Wrong" subtitle="try again"/>
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <ListingClient listing={listing} currentUser={currentUser}/>
        </ClientOnly>
    )



}

export default ListingPage