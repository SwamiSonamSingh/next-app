export const metadata ={
    title:'authentication',
    description:'authentication module'
}

export default function AuthLayout ({
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