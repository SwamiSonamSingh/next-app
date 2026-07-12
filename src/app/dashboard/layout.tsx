export const metadata = {
    title: 'paraller route',
    description: 'parallel route desc'
}

export default function ParallerRouteLayout({
    children,
    users,
    notifications,
    products,
    login
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    notifications: React.ReactNode,
    products: React.ReactNode,
    login: React.ReactNode
}) {
    let isLoggedIn = true
    return (
        isLoggedIn?<div>
            <div>{children}</div>
            <div style={{display:'flex', gap:'10px', height:'auto'}}>
                <div>
                    <div>{users}</div>
                    <div>{notifications}</div>
                </div>
                <div>{products}</div>
            </div>
        </div>:<div>{login}</div>
    )
}