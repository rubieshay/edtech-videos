import type { Metadata } from "next";
// import { createContext } from "react";
import "./styles/global.css";
import "./styles/navigation.css";
import "./styles/inputs.css";
import "./styles/content-studio.css";
import "./styles/video-results.css";
import "./styles/video-viewer.css";
import "./styles/comments.css";

// export const UserContext = createContext();

export const metadata: Metadata = {
    title: "EdVideos"
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    
    return (
        <html lang="en">
            <body>
                {/* <UserContext> */}
                    {children}
                {/* </UserContext> */}
            </body>
        </html>
    );
}
