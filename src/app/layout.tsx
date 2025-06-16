import type { Metadata } from "next";
import "./styles/global.css";
import "./styles/navigation.css";
import "./styles/inputs.css";
import "./styles/upload_video.css";
import "./styles/video_option.css";
import "./styles/video_viewer.css";
import "./styles/comments.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "EdVideos"
}

export default function RootLayout({ children }:
    Readonly<{children: React.ReactNode;}>) {
    
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/" className="home-link">
                            <h1>EdVid</h1>
                        </Link>
                        <Link href="/">
                            <span>Homepage</span>
                        </Link>
                        <Link href="/upload_video">
                            <span>Upload Video</span>
                        </Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
