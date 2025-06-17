import Link from "next/link";
import StudioVideos from "./studio-videos";

export default function ContentStudio() {
    // ContentStudio allows the user to see their content and edit it or upload something new
    return (
        <main id="content-studio">
            <div>
                <div>
                    <h2>Content Studio</h2>
                    <h3>rubie_shay</h3>
                </div>
                <Link href="/content-studio/upload-video" className="button-link">Upload New Video</Link>
            </div>
            <StudioVideos/>
        </main>
    );
}