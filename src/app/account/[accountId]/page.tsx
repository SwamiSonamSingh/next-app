export default async function AccountId({
    params,
}:{params:Promise<{accountId:string}>}){
    const accountId = (await params).accountId
    return(
        <h1>User {accountId}</h1>
    )
}