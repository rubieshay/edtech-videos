import Link from "next/link";

export default function MainLayout({ children }:
    Readonly<{children: React.ReactNode;}>) {
    // This layout is used for most of the app, and contains the navigation header
    
    return (
        <>
            <header>
                <nav>
                    <Link href="/videos" className="home-link">
                        <h1>EdVid</h1>
                    </Link>
                    <Link href="/videos">
                        <span>Home</span>
                    </Link>
                    <Link href="/content_studio">
                        <span>Content Studio</span>
                    </Link>
                </nav>
            </header>
            {children}
        </>
    );
}
