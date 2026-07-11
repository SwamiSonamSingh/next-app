import Footer from "./Footer/Footer"
import Header from "./Header/Header"

export const metadata = {
    title: 'Next.js',
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