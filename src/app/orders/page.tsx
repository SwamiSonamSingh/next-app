'use client'

import { useRouter } from "next/navigation"

export default function Orders() {
    const router = useRouter()
    const handleClick = () => {
        console.log('completing payment...')
        setTimeout(() => {
            router.push('/')
        }, 1000)
    }
    return (
        <div>
            <button
                onClick={handleClick}
                style={{ color: 'blue' }}
            >
                Complete Payment
            </button>
        </div>
    )
}