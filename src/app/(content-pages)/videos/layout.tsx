import Link from "next/link";

export default function VideosLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    // This layout is used for most of the app, and contains the navigation header
    // This version highlights Learn in the navbar
    
    return (
        <>
            <header>
                <nav>
                    <Link href="/videos" className="home-link">
                        <h1>EdVid</h1>
                    </Link>
                    <Link href="/videos" className="nav-link nav-link-active">
                        <span>Learn</span>
                    </Link>
                    <Link href="/content-studio" className="nav-link">
                        <span>Content Studio</span>
                    </Link>
                    <Link href="/" className="logout-button">
                        <span>Logout</span>
                    </Link>
                </nav>
            </header>
            {children}
        </>
    );
}
