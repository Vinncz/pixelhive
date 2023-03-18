import './globals.css'
import NavBar from './navbar/navbar'
import Footer from './footer/footer'
import NavSpan from './navspan'

export const metadata = {
    title: 'PixelHive • Digital Marketplace',
    description: 'A marketplace for digital goods',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='gap15 r verti'>
                <NavBar></NavBar>
                    <main className="flex hori fullH fullW r centerHori martom30">
                        <div id='pageWrapper' className="flex verti fullH r gap5">
                            <NavSpan></NavSpan>
                            
                            {children}
                        </div>
                    </main>
                <Footer></Footer>
            </body>
        </html>
    )
}
