'use client'
import { startTransition } from "react"
import { useRouter } from "next/navigation"

export default function ErrorBoundary({ error, reset }: {
    error: Error,
    reset: () => void
}) {
    const router = useRouter()
    const handleReload = () => {
        startTransition(() => {
            router.refresh();
            reset()
        })
    }
    return (
        <div>
            <p>{error?.message}</p>
            <button className="border-black cursor-pointer text-amber-50 rounded-md bg-amber-950 pl-2 pr-2 pb-1 pt-1" onClick={handleReload}>Try Again</button>
        </div>
    )
}