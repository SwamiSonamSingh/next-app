import { StaticImageData } from 'next/image'
import photo1 from './photos/1.jpeg'
import photo2 from './photos/2.jpeg'
import photo3 from './photos/3.jpeg'
import photo4 from './photos/4.jpeg'

export type WondersList = {
    id: string,
    name: string,
    image: StaticImageData,
    phototgrapher: string
}

export const wondersList: WondersList[] = [
    {
        id: "1",
        name: 'Wonder1',
        image: photo1,
        phototgrapher: "Max"
    },
    {
        id: "2",
        name: 'Wonder2',
        image: photo2,
        phototgrapher: "David"
    },
    {
        id: "3",
        name: 'Wonder3',
        image: photo3,
        phototgrapher: "Robin"
    },
    {
        id: "4",
        name: 'Wonder4',
        image: photo4,
        phototgrapher: "Rax"
    },
]