"use client";

import Link from "next/link";
import { useContext } from "react";
import StudioVideos from "./studio-videos";
import { UserDataContext } from "../../utils/user-data-context";

export default function ContentStudio() {
    // ContentStudio allows the user to see their content and edit it or upload something new

    const {currentUserID} = useContext(UserDataContext);

    return (
        <main id="content-studio">
            <div>
                <div>
                    <h2>Content Studio</h2>
                    <h3>Signed in as <i>{currentUserID}</i></h3>
                </div>
                <Link href="/content-studio/upload-video" className="button-link">Upload New Video</Link>
            </div>
            <StudioVideos/>
        </main>
    );
}