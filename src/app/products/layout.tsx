export const metadata ={
    title:'product',
    description:'product description'
}

export default function ProductLayout ({
    children,
}:{children:React.ReactNode}){
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}