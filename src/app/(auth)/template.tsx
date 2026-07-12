'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import './style.css'
import { useState } from "react"

const navLinks = [
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register' },
    { name: 'Forgot Passowrd', link: '/forgotPassword' }
]

export default function AuthLayout({
    children,
}: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [input,setInput]=useState('')
    return (
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            {navLinks.map((links) => {
                const isActive = pathname === links.link || (pathname.startsWith(links.link) && links.link !=='/')
                console.log(isActive)
                return (
                    <Link
                        href={links.link}
                        key={links.name}
                        
                        className={isActive ? "font-bold mr-4 pointer-events-none" : "text-blue-500 m-4"}
                    >{links.name}</Link>
                )
            })}
            {children}
        </div>
    )
}