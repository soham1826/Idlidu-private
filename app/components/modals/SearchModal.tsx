"use client"

import useSearchModal from "@/app/hooks/useSearchModal"
import ModalSearch from "./ModalSearch";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";
;


const SearchModal = () => { 
    const searchModal = useSearchModal()
    const params = useSearchParams()
    const actionLabel =  "Search"
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter();

    const handleSubmit = useCallback((event:React.FormEvent)=>{
      event.preventDefault();
      let currentQuery = {};
      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        q: searchQuery,
      };

      if (params?.get("q") === searchQuery) {
        delete updatedQuery.q;
      }

      const url = qs.stringifyUrl(
        {
          url: "/search",
          query: updatedQuery,
        },
        { skipNull: true }
      );
        
      searchModal.onClose()
      router.push(url);


    },[searchQuery,params,router,searchModal])

  
        // const encodedSearchQuery = encodeURI(searchQuery);
        // router.push(`/search?q=${encodedSearchQuery}`)
        // searchModal.onClose()

    const bodyContent = (
      <form onSubmit={handleSubmit} className="flex flex-row gap-2 items-center justify-center">
        <input value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value)} className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-lg outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:border-blue-500" placeholder="Search Anything" />
        <button type="submit" >
        <div className="bg-blue-500 text-white text-[1rem] p-6 rounded-lg ">
          <BiSearch/>
        </div>
        </button>
      </form> 
            
       
    )


  return (
    <ModalSearch isOpen={searchModal.isOpen} onClose={searchModal.onClose}  title="Search For the Artist!" actionLabel={actionLabel} body={bodyContent} />
  )
}

export default SearchModal