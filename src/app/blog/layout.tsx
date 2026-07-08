export const metadata ={
    title:'blog',
    description:'blog description'
}

export default function BlogLayout ({
    children
}:{children:React.ReactNode}){
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}