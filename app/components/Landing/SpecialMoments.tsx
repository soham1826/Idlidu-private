"use client"
import Marquee from "@/components/ui/marquee"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SafeUser } from "@/app/types";
import { useCallback } from "react";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";

interface SpecialProps
{
    currentUser?: SafeUser | null
  }

const cards = [
    {
      id: 1,
      body: "Tabla",
      img: "/assets/tabla.jpg",
    },
    {
      id: 2,
      body: "Rangoli",
      img: "/assets/rangoli.jpg",
    },
    {
      id: 3,
      body: "Guitar",
      img: "/assets/guitar.jpg",
    },
    {
      id: 4,
      body: "Drums",
      img: "/assets/drum.jpg",
    },
    {
      id: 5,
      body: "Singing",
      img: "/assets/singer.jpg",
    },
    {
      id: 6,
      body: "DJ",
      img: "/assets/dj.jpg",
    },
  ];
  
  const firstRow = cards;
  
  const ReviewCard = ({
    id,
    img,
    body,
  }: {
    id: number;
    img: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-white hover:bg-gray-100"
        )}
      >
        <div className="flex flex-col items-center gap-2 ">
          <Image
            className=" border border-black rounded-xl w-full h-[300px] object-cover"
            width="300"
            height="300"
            alt=""
            src={img}
          />
          <blockquote className="mt-2 text-md  text-blue-500 font-bold">
            {body}
          </blockquote>
        </div>
      </figure>
    );
  };

const SpecialMoments:React.FC<SpecialProps> = ({currentUser}) => {
    const loginModal = useLoginModal();
    const router = useRouter();
    const onExplore =useCallback(()=>{
        if(!currentUser){
            loginModal.onOpen();
        }
        router.push("/explore")
     
    },[router,loginModal,currentUser])
  return (
    <section className="flex flex-col items-center justify-start mt-10 w-full h-screen bg-zinc-800 pt-10 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-300 text-center">
          Find artists for your{" "}
          <span className="bg-gradient-to-r from-[#4287f5]  to-[#42e3f5] text-transparent bg-clip-text">
            Special Moments{" "}
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold my-4 text-gray-400 text-center">
          Verified artists with wide range of categories.
        </p>

        <div className="flex h-[600px] w-full flex-col items-center justify-center overflow-x-hidden rounded-lg ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>

          <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <button onClick={onExplore} className="p-4 rounded-full text-center bg-blue-500 text-white">
              Explore Artists
            </button>
          </div>
        </div>
      </section>
  )
}

export default SpecialMoments