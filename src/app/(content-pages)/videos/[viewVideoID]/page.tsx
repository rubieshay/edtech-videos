import Comments from "./comments";
import VideoViewer from "./video-viewer";

export default async function VideoPage({ params }: {params: Promise<{ viewVideoID: string }>}) {
    // VideoPage contains the video player and comments section

    const videoID = (await params).viewVideoID;
    
    if (videoID) {
        return (
            <main id="video-page">
                <VideoViewer videoID={videoID}/>
                <Comments videoID={videoID}/>
            </main>
        );
    }
}