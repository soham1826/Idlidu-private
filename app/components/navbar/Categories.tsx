"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { LiaDrumSolid, LiaCreativeCommonsSampling } from "react-icons/lia";
import { BsMagic, BsMusicPlayerFill } from "react-icons/bs";
import { FaSkiing, FaGuitar, FaDrumSteelpan } from "react-icons/fa";
import {
  GiCactus,
  GiCircularSawblade,
  GiGuitarBassHead,
  GiFlute,
  GiPianist,
  GiMusicalScore,
  GiHeartInside,
  GiOpenPalm
} from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { MdGroups3 } from "react-icons/md";
import { TbMusic } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Guitar",
    icon: FaGuitar,
    description: "These are Guitar Artists",
  },
  {
    label: "Singer",
    icon: TbMusic,
    description: "These are Singers",
  },
  // {
  //   label: "Mehendi Artist",
  //   icon: GiOpenPalm,
  //   description: "These are Mehendi Artists",
  // },
  {
    label: "Tabla",
    icon: FaDrumSteelpan,
    description: "These Are Tabla Artists",
  },
  // {
  //   label: "Magician",
  //   icon: BsMagic,
  //   description: "These are magicians",
  // },
  {
    label: "Sitar",
    icon: GiGuitarBassHead,
    description: "These are Sitar Artists",
  },
  {
    label: "Flute",
    icon: GiFlute,
    description: "These are Flute Artists",
  },
  {
    label: "Drums",
    icon: LiaDrumSolid,
    description: "These are Drum Artist",
  },
  {
    label: "Vocalist",
    icon: GiMusicalScore,
    description: "These are vocalists",
  },
  {
    label: "Pianist",
    icon: GiPianist,
    description: "These are Pianists",
  },
  {
    label: "Choir",
    icon: MdGroups3,
    description: "These are choir Groups",
  },
  {
    label: "DJ",
    icon: BsMusicPlayerFill,
    description: "These are Disc Jockeys",
  },
  // {
  //   label: "Rangoli Artist",
  //   icon: LiaCreativeCommonsSampling,
  //   description: "These are Rangoli Artists",
  // },
  // {
  //   label: "Dancer",
  //   icon: GiHeartInside,
  //   description: "These are Dancers",
  // },
  // {
  //   label: "Food art",
  //   icon: IoFastFood,
  //   description: "These are Food artists",
  // },

  {
    label: "Others",
    icon: GiCircularSawblade,
    description: "These Perform some Rare arts",
  },
];

type Props = {};

function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/explore";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">
        {categories.map((items, index) => (
          <CategoryBox
            key={index}
            icon={items.icon}
            label={items.label}
            selected={category === items.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
