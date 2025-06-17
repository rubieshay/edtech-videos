import type { Metadata } from "next";
import "./styles/global.css";
import "./styles/navigation.css";
import "./styles/inputs.css";
import "./styles/content_studio.css";
import "./styles/video_results.css";
import "./styles/video_viewer.css";
import "./styles/comments.css";

export const metadata: Metadata = {
    title: "EdVideos"
}

export default function RootLayout({ children }:
    Readonly<{children: React.ReactNode;}>) {
    
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
