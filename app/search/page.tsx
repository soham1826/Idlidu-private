
import useSWR from "swr";
import { useSearchParams } from "next/navigation"
import { NextResponse } from "next/server";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ListingCard from "../components/listing/ListingCard";
import getListingBySearch,{ISearchParams} from "../actions/getListingBySearch";
import { SafeUser } from "../types";
import Heading from "../components/Heading";

export const dynamic = 'force-dynamic'

interface SearchProps{
  searchParams:ISearchParams
}
  
const SearchPage =async({searchParams}:SearchProps) => {

    const listings = await getListingBySearch(searchParams);
    const currentUser = await getCurrentUser();
    if(listings.length === 0){ 
      return (<ClientOnly>
        <EmptyState  subtitle="Try searching for differnt listings" showReset/>
        </ClientOnly>)
    }
    return(
      <ClientOnly>
        <Container>
      <div className="pt-12 mt-8">  
      <Heading
        title= "Search Results"
        subtitle={`Showing Results for ${searchParams.q}`}
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
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
      </ClientOnly>
       
    )
}

export default SearchPage