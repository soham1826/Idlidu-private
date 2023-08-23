import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    location,
    price,
    phoneNo,
    artistFirstName,
    artistLastName,
    city,
    state,
    pincode
  } = body;

  const listen = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      locationValue: location.value,
      phoneNo,
      price: parseInt(price, 10),
      artistFirstName,
      artistLastName,
      userId: currentUser.id,
      city,
      state,
      pincode
    },
  });

  return NextResponse.json(listen);
}
