"use client"
import {BiSearch} from "react-icons/bi"

const Search = () => {
  return (
<div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
    <div 
    className="flex flex-row items-center justify-between">
        <div className="sm:block p-2 mx-5 opacity-25">Search for best Artists</div>    
        <div className="p-2 mx-3  bg-blue-500 rounded-full text-white">
        <BiSearch size={18}/>
        </div>
    </div>
</div>
  )
}

export default Search