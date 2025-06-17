import Link from "next/link";
import testData from "../../utils/test-data.json";

export default function StudioVideos() {
    // StudioVideos shows your existing videos for you to edit
    const sampleUserID = "rubie_shay";
    const yourVideos = testData.videos.filter((video) => video.user_id === sampleUserID);

    return (
        <section className="edit-video-list">
            <ul>
                {yourVideos.map((videoData) => (
                    <li key={videoData.video_id}>
                        <Link href={`/content-studio/${encodeURIComponent(videoData.video_id)}`}>
                            <video className="video-thumbnail">
                                <source src={videoData.video_url + "#t=1"}></source>
                                <source src={"/video-not-found.mp4#t=1"}></source>
                                An error occurred with the video player.
                            </video>
                            <article>
                                <h4 title={videoData.title}>{videoData.title}</h4>
                                <span title={videoData.video_url}>{videoData.video_url}</span>
                            </article>
                            <span className="material-symbols-outlined">edit</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}