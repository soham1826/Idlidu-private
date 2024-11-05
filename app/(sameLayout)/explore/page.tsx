import Container from "../../components/Container";
import EmptyState from "../../components/EmptyState";
import getListings, { IListingsParams } from "../../actions/getListings";
import ClientOnly from "../../components/ClientOnly";
import ListingCard from "../../components/listing/ListingCard";
import getCurrentUser from "../../actions/getCurrentUser";

export const dynamic = 'force-dynamic'

interface HomeProps{
  searchParams:IListingsParams
}

const Home  = async({searchParams}:HomeProps) =>{
  const listings = await getListings(searchParams);
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

  export default Home;

   
  
