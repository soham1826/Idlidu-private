import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "../components/listing/ListingCard";

interface FavouritesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const FavouritesClient: React.FC<FavouritesClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <Container>
    <div className="mt-12 pt-4 px-2">
       <Heading
        title="Favourites"
        subtitle="List of artists you favourited!"
      />
    </div> 
      
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default FavouritesClient;