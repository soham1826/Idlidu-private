"use client"
import useSearchModal from "@/app/hooks/useSearchModal"
import { use, useEffect, useState } from "react";
import {BiSearch} from "react-icons/bi"

const Search = () => {
  const searchModal = useSearchModal();
  const [placeholder ,setPlaceholder]= useState("Search")
  return (
<div onClick={searchModal.onOpen} className="border-[1px] w-full md:w-1/4 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
    <div 
    className="flex flex-row items-center justify-between">
        <div className=" block p-2 mx-5 opacity-25">Search here</div>    
        <div className="p-2 mx-3  bg-blue-500 rounded-full text-white">
        <BiSearch size={18}/>
        </div>
    </div>
</div>
  )
}

export default Search