"use client"
import Image from "next/image"
import { BorderBeam } from "@/components/ui/border-beam"
import { useRouter } from "next/navigation"
import { SafeUser } from "@/app/types"
import React from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import useRentModal from "@/app/hooks/useRentModal"
import { useCallback } from "react"
interface HeroProps
{
    currentUser?: SafeUser | null
  }

const Hero:React.FC<HeroProps> = ({currentUser}) => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const onRent = useCallback(()=>{
        console.log("Cliked become artist")
        if(!currentUser){
          return loginModal.onOpen()
        }
        rentModal.onOpen();
      },[currentUser,loginModal,rentModal])

    const onExplore = useCallback(()=>{
        console.log("Cliked explore")
        if(!currentUser){
            loginModal.onOpen();
        }
        router.push('/explore')
    },[loginModal,currentUser,router])

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen md:px-1 px-5">
        <h1 className="md:text-5xl text-4xl font-bold text-gray-800 text-center">
          Find the Best Match for Your Festivals
        </h1>
        <p className=" flex flex-row  items-center justify-center md:text-6xl text-5xl font-bold bg-gradient-to-r from-[#4287f5]  to-[#42e3f5] text-transparent bg-clip-text">
          Idlidu
        </p>
        <div className="flex flex-row items-center justify-center gap-4 mt-5">
          <button onClick={onRent} className="p-3 rounded-full text-center bg-white border border-gray-400 hover:shadow-xl text-blue-400">
            Become an Artist
          </button>
          <button  onClick={onExplore} className="p-3 rounded-full text-center bg-gradient-to-r from-[#4287f5]  to-[#42e3f5] text-white hover:shadow-xl">
            Explore Artists
          </button>
        </div>
        <div className="relative h-auto max-w-[1200px] rounded-xl shadow-md shadow-black mt-6">
          <Image
            alt="hero"
            src="/assets/idlidu.png"
            width={1000}
            height={1000}
            className="w-full h-full rounded-xl"
          />
          <BorderBeam
            borderWidth={4}
            colorFrom="#4287f5"
            colorTo="#42e3f5"
            duration={10}
          />
        </div>
      </section>
  )
}

export default Hero