import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
import FavouritesClient from "./FavouritesClient";

const Favourites = async()=>{
    const listings = await getFavouriteListings();
    const currentUser = await getCurrentUser();
    if(listings?.length === 0){
        return(
            <ClientOnly>
                <div className="flex flex-col justify-center items-center">
                    <EmptyState
                     title="um huh ! No favourites found"
                    subtitle="Looks like you have no favourite listings"
                    />
                </div>
            </ClientOnly>
        )
    }
    return(
        <ClientOnly>
            <FavouritesClient listings={listings} currentUser={currentUser}/>
        </ClientOnly>
    )
    
}

export default Favourites;