import Link from "next/link";

export default function F1(){
    return(
        <div>
            This is F1
            <Link className="text-blue-500 ml-2" href='/f1/f2'>F2</Link>
            <Link className="text-blue-500 ml-2" href='/f3'>F3</Link>
        </div>
    )
}