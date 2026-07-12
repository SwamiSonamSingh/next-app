import { notFound } from "next/navigation"

export default async function Reviews({
    params
}:{params:Promise<{reviewsId:string, productId:string}>}){
    const {reviewsId, productId} = await params
    const randomValue = Math.floor(Math.random()*10)
    if(randomValue===4){
        throw new Error('Error occured')
    }
    if(parseInt(reviewsId)>10){
        notFound()
    }
    return(
        <h1>Product {productId} review {reviewsId}</h1>
    )
}