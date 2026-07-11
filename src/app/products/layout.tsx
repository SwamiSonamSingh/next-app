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
                <footer style={{background:'lightgreen', padding:'1rem'}}>This is product page footer</footer>
            </body>
        </html>
    )
}