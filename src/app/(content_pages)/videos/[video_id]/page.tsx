import Comments from "./comments";
import VideoViewer from "./video_viewer";
export default async function VideoPage({ params }: {params: Promise<{ video_id: string }>}) {
    // VideoPage contains the video player and comments section

    const videoID = (await params).video_id;

    console.log(videoID);
    
    if (videoID) {
        return (
            <main id="video-page">
                <VideoViewer videoID={videoID}/>
                <Comments videoID={videoID}/>
            </main>
        );
    }
}