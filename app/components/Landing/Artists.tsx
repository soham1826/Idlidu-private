"use client"
import { SafeUser } from "@/app/types"
import { BentoGrid } from "@/components/ui/bento-grid"
import { BentoGridItem } from "@/components/ui/bento-grid"
import useRentModal from "@/app/hooks/useRentModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import { useCallback } from "react"
import Image from "next/image"
import globalPic from "../../../public/assets/globe.jpeg"
import socialPic from "../../../public/assets/social.jpeg"
import handshakePic from "../../../public/assets/handshake.jpeg"
import callenderPic from "../../../public/assets/calender.jpeg"
interface ArtistsProps
{
    currentUser?: SafeUser | null
  }

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  const features = [
    {
      title: "Go global",
      description: "Don't let boundries stop your inner artist.",
      header: <Image className="flex object-cover w-full h-full min-h-[6rem] rounded-xl " src={globalPic} alt="global" width={300} height={300}/>,
      className: "md:col-span-2",
    },
    {
      title: "Get Discovered",
      description: "Give your art recognition it deserved.",
      header: <Image className="flex object-cover w-full h-full min-h-[6rem] rounded-xl " src={socialPic} alt="global" width={300} height={300}/>,
      className: "md:col-span-1",
    },
    {
      title: "Your Schedule",
      description: "Perform on the time and dates according to you.",
      header: <Image className="flex object-cover w-full h-full min-h-[6rem] rounded-xl " src={callenderPic} alt="global" width={300} height={300}/>,
      className: "md:col-span-1",
    },
    {
      title: "Your art your price",
      description:
        "Pick the price that your art deserves.",
      header: <Image className="flex object-cover w-full h-full min-h-[6rem] rounded-xl " src={handshakePic} alt="handshake" width={300} height={300}/>,
      className: "md:col-span-2",
    },
  ];

const Artists:React.FC<ArtistsProps> = ({currentUser})  => {
    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const onRent = useCallback(()=>{
        console.log("Cliked become artist")
        if(!currentUser){
          return loginModal.onOpen()
        }
        rentModal.onOpen();
      },[currentUser,loginModal,rentModal])

  return (
    <section className="flex flex-col items-center justify-center mt-10 w-full h-auto px-4 md:px-1 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          Artist yourself ?{" "}
          <span className="bg-gradient-to-r from-[#4287f5]  to-[#42e3f5] text-transparent bg-clip-text">
            Join Idlidu Fam.{" "}
          </span>
        </h1>
        <p className=" text-xl md:text-2xl font-semibold my-4 text-gray-400">
          Here&apos;s why you should become an Idlidu artist
        </p>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {features.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          // icon={item.icon}
        />
      ))}
    </BentoGrid>
      <p className=" text-xl md:text-2xl font-semibold my-4 text-gray-400">
          Start your artistic journey with Idlidu.
        </p>
        <button onClick={onRent} className="p-4 rounded-full text-center bg-white border border-gray-300 hover:shadow-xl text-blue-400">
              Become an Artist
        </button>
      </section>
  )
}

export default Artists