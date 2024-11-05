import { BorderBeam } from "@/components/ui/border-beam";
import { Calendar } from "@/components/ui/calendar";
import Container from "./components/Container";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoGrid,BentoGridItem } from "@/components/ui/bento-grid";
import Footer from "./components/Footer";
import Hero from "./components/Landing/Hero";
import getCurrentUser from "./actions/getCurrentUser";
import SpecialMoments from "./components/Landing/SpecialMoments";
import Artists from "./components/Landing/Artists";



const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const features = [
  {
    title: "Go global",
    description: "Don't let boundries stop your inner artist.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "Get Discovered",
    description: "Give your art recognition it deserved.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "Your Schedule",
    description: "Perform on the time and dates according to you.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "Your art your price",
    description:
      "Pick the price that your art deserves.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
];



export default  async function LandingPage() {

  const currentUser = await getCurrentUser();
  return (
    <div className="flex flex-col w-full h-full">
      <Hero currentUser={currentUser}/>
      <SpecialMoments currentUser={currentUser}/>
      <Artists currentUser={currentUser}/>
    </div>
  );
}
