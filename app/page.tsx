import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import ListingCard from "./components/listing/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home(){
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if(listings.length === 0){ 
    return (<ClientOnly>
      <EmptyState showReset/>
      </ClientOnly>)
  }
  return(
    <ClientOnly>
      <Container>
      <div className="pt-[180px] lg:pt-[6rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
        {listings.map((listing:any)=>{
          return(
            <ListingCard key={listing.id} data={listing} currentUser={currentUser} />)
        })}

      </div>
    </Container>

    </ClientOnly>
     
  )
  }

   
  
