"use client";

import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";
import { SocialIcon } from "react-social-icons";
import useRentModal from "../hooks/useRentModal";
import getCurrentUser from "../actions/getCurrentUser";
import useLoginModal from "../hooks/useLoginModal";
import { SafeUser } from "../types";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

// const Footer = () => {
  

//   return (
//     <ClientOnly>
//       <div className="justify-center text-center align-middle items-center w-full h-auto bg-slate-300 mt-[5rem] mb-0 grid grid-cols-1 md:grid-cols-3 gap-2 static">

//       <div onClick={redirect} className="hover:text-blue-500 cursor-pointer font-semibold">
//         Privacy Policy
//       </div>

//       <div className="justify-center text-blue-500">
//         Copyright@ Idlidu 2023
//       </div>
//       <div className="flex flex-col items-center justify-center cursor-pointer font-semibold">
//         Connect with Us
//         <div className="items-center justify-center flex flex-row">
//         <SocialIcon  className=""fgColor="blue" bgColor="transparent" url="https://twitter.com/IdliduArtists" />

//         <SocialIcon  fgColor="violet" bgColor="transparent" url="https://www.instagram.com/idliduartist/" />

//         <SocialIcon  fgColor="black" bgColor="transparent" url="https://www.facebook.com/profile.php?id=61550659610880" />
//         </div>

//       </div>

//       </div>
//     </ClientOnly>
//   );
// }

// export default Footer;

const Footer = () => {
  const rentModal = useRentModal();
  const loginModal = useLoginModal();
  const router = useRouter()
  const redirect = ()=>{
    router.push("/privacy")
  }


  return (
    <div className="pb-5 md:px-10 px-5 md:text-xl text-lg  ">
    <div className="bg-gradient-to-r from-[#4287f5]  to-[#42e3f5] md:p-10  p-5 flex md:flex-row flex-col rounded-lg items-center md:justify-between justify-center gap-4 ">
      <Image
        className="rounded-full"
        src="/assets/logo.png"
        alt="logo.png"
        width={200}
        height={200}
      />

      <div className="flex flex-col items-center justify-center cursor-pointer font-semibold text-white">
        Connect with Us
        <div className="items-center justify-center flex flex-row">
          <SocialIcon
            className=""
            fgColor="blue"
            bgColor="transparent"
            url="https://twitter.com/IdliduArtists"
          />

          <SocialIcon
            fgColor="violet"
            bgColor="transparent"
            url="https://www.instagram.com/idliduartist/"
          />

          <SocialIcon
            fgColor="black"
            bgColor="transparent"
            url="https://www.facebook.com/profile.php?id=61550659610880"
          />
        </div>
      </div>

      <div
        onClick={redirect}
        className="hover:text-black text-white cursor-pointer font-semibold"
      >
        Privacy Policy
      </div>

      <div className="justify-center text-white">Copyright@ Idlidu 2024</div>
    </div>
    </div>
  );
};

export default Footer;
