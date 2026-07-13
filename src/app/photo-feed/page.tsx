import Image from "next/image";
import { wondersList } from "./wonders";
import Link from "next/link";

export default function PhotoFeed (){
    return(
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                Wonders of the world
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wondersList.map((items)=>{
                    return(
                        <Link key={items?.id} href={`/photo-feed/${items?.id}`}>
                            <Image
                                src={items?.image}
                                alt={items?.name}
                                className="w-full object-cover aspect-square"
                            />
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}