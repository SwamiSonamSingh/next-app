import { wondersList, WondersList } from "../wonders"
import Image from "next/image"

export default async function PhotoId({
    params
}: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const photo: WondersList = wondersList.find((photo) => photo.id === id)!
    return (
        <div>
            <Image
                src={photo.image}
                alt={photo.name}
            />

        </div>
    )
}