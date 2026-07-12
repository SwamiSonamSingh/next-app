import { Metadata } from "next"
import Link from "next/link"

export const metadata : Metadata={
    title:'Blog page'
}

export default function Blog (){
    return(
        <div>
            <h1>Blog page</h1>
            <Link href='/'>Back to home</Link>
        </div>
    )
}