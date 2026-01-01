import { currentUser } from "@clerk/nextjs/server"
import PublicNavBar from "@/components/PublicNavBar"
import PrivateNavBar from "@/components/PrivateNavBar"

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await currentUser()

    return (
        <main className="relative">
            {/* render private navbar is user exists otherwise public navbar */}
            {user ? <PrivateNavBar /> : <PublicNavBar />} 


            <section className="pt-36">
                {children}
            </section>
        </main>
    )
}