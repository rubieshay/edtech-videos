import type { Metadata } from "next";
import "./styles/global.css";
import "./styles/login.css";
import "./styles/inputs.css";
import "./styles/navigation.css";
import "./styles/content-studio.css";
import "./styles/video-results.css";
import "./styles/video-viewer.css";
import "./styles/video-player.css";
import "./styles/comments.css";

import { UserDataProvider} from "./utils/user-data-context";

export const metadata: Metadata = {
    title: "EdVideos"
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    
    return (
        <html lang="en">
            <body>
                <UserDataProvider>
                    {children}
                </UserDataProvider>
            </body>
        </html>
    );
}
