import prisma from "@/app/libs/prismadb"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"


export async function GET(request:Request){
    const {searchParams} = new URL(request.url);
    const query = searchParams.get("q");
    console.log(query);

    try{
        if(typeof query !== "string"){
            throw new Error("Invalid query")
        }
        const listings = await prisma.listing.findMany({
            where:{
                OR:[
                    {
                        category:{
                            equals:query,
                            mode:"insensitive"
                        }
                    },
                    {
                        category:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },
                    
                    {
                    artistFirstName:{
                        contains:query,
                         mode:"insensitive"
                        }
                    },
                    {
                    artistLastName:{
                        contains:query,
                        mode:"insensitive"
                    }
                    },
                    {
                    title:{
                        contains:query,
                        mode:"insensitive"
                        }
                    },
                    {
                    description:{
                            contains:query,
                            mode:"insensitive"
                        }

                    },
                    {
                        city:{
                            contains:query,
                            mode:"insensitive"
                        }

                    },
                    {
                        state:{
                            contains:query,
                            mode:"insensitive"
                        }

                    },
                    {
                        pincode:{
                            contains:query,
                            mode:"insensitive"
                        }

                    }
                    
                ]
                
                
                    
                
                

                // OR:[
                //     {
                //         title:{
                //             contains:query,
                //             mode:"insensitive"
                //         },
                //         description:{
                //             contains:query,
                //             mode:"insensitive"
                //         },
                //         artistFirstName:{
                //             contains:query,
                //             mode:"insensitive"
                //         },
                //         artistLastName:{
                //             contains:query,
                //             mode:"insensitive"
                //         }

                //     }
                // ]
            },
            include:{
                user:true
            }
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
          }));

        return NextResponse.json(safeListings)
    
    }
    catch(error){
        if(error){
            console.log("error",error)
        }
        
    }

    
}