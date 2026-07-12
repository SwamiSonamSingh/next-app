import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import './global.css'

export const metadata = {
    title: {
        default:'This is default page title',
        template:'%s | This is dynamic title'
    },
    description: "created by default next"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}