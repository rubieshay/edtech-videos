import testData from "../../../utils/test-data.json";

export default function VideoViewer({ videoID } : {videoID: string}) {
    // VideoViewer will contain the title, description, and video player

    const videoData = testData.videos.find((video) => video.video_id === videoID);

    if (videoData) {
        return (
            <section className="video-viewer">
                <h2 id="video-label" title={videoData.title}>{videoData.title}</h2>
                <video className="video-player" aria-labelledby="video-label" controls>
                    <source src={videoData.video_url}></source>
                    <source src={"/video-not-found.mp4#t=1"}></source>
                    An error occurred with the video player.
                </video>
                <div className="description">
                    <h4 title={"Created by " + videoData.user_id}>Created by <i>{videoData.user_id}</i></h4>
                    <p>{videoData.description}</p>
                </div>
            </section>
        );
    }
}