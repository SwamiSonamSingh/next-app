export default async function ProductDetails({
    params,
}:{params:Promise<{productId:string}>}){
    const productId = (await params).productId
    return(
        <h1>You are accessing product {productId} details</h1>
    )
}