export const metadata={
    title:'profile page',
    description:'profile page desc'
}

export default function profileLayout({
    children,
}:{children:React.ReactNode}){
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}