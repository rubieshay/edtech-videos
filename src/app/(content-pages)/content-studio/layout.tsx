import Link from "next/link";

export default function ContentStudioLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    // This layout is used for most of the app, and contains the navigation header
    // This version highlights Content Studio in the navbar
    
    return (
        <>
            <header>
                <nav>
                    <Link href="/videos" className="home-link">
                        <h1>EdVid</h1>
                    </Link>
                    <Link href="/videos" className="nav-link">
                        <span>Learn</span>
                    </Link>
                    <Link href="/content-studio" className="nav-link nav-link-active">
                        <span>Content Studio</span>
                    </Link>
                </nav>
            </header>
            {children}
        </>
    );
}
