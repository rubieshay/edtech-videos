import type { Metadata } from "next";
import "./styles/global.css";
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
                    <Link href="/">
                        <h1>EdVid</h1>
                    </Link>
                </header>
                {children}
            </body>
        </html>
    );
}
