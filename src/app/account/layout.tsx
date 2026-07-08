export const meta ={
    title:'account',
    description:'account description'
}

export default function AccountLayout({
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