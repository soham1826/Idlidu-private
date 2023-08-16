export interface ISearchParams{
    q:string
}

export default async function getListingBySearch(params:ISearchParams){
    try{
        const{q} = params;
        console.log(params);
        const response = await fetch(`http://localhost:3000/api/search?q=${params.q}`,{
            method:"GET",
            headers:{
              'Content-Type':'application/json'
            }
          })
          const data = await response.json()

          return data;
    }catch(err){
        console.log(err)
    }
}
