import { wondersList, WondersList } from "../../wonders"
import Image from "next/image"
import './style.css'

export default async function Modal({
    params
}: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const photo: WondersList = wondersList.find((photo) => photo.id === id)!
    return (
        <div className="modal-overlay">
            <div className="modal">
                <Image
                    src={photo.image}
                    alt={photo.name}
                />
                <h2>{photo.name}</h2>
                <p>Photographer: {photo.phototgrapher}</p>
            </div>
        </div>
    )
}