import testData from "../../utils/test_data.json";

export default function VideoViewer({ videoID } : {videoID: string}) {
    // VideoViewer will contain the title, description, and video player

    const videoData = testData.videos.find((video) => video.video_id === videoID);
    console.log(videoData);

    if (videoData) {
        return (
            <section className="video-viewer">
                <h2 id="video-label">{videoData.title}</h2>
                <video className="video-player" src={"/sample_video_files/" + videoData.video_url}         
                    aria-labelledby="video-label" controls>
                    An error occurred with the video player.
                </video>
                <div className="description">
                    <h4>Created by <i>{videoData.user_id}</i></h4>
                    <p>{videoData.description}</p>
                </div>
            </section>
        );
    }
}