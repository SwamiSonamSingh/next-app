import { Metadata } from "next"

type Props ={
    params : Promise<{productId:string}>
}

export const generateMetadata = async({
    params,
}: Props): Promise<Metadata> => {
    const id = (await params).productId
    const title = await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(`iphone ${id}`)
        },100)
    })
    return{
        title:`Product ${title}`,
        description:`this is description of ${title}`
    }
}

export default async function ProductDetails({
    params,
}:{params:Promise<{productId:string}>}){
    const productId = (await params).productId
    return(
        <h1>You are accessing product {productId} details</h1>
    )
}