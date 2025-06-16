import Link from "next/link";
import testData from "../utils/test_data.json";

export default function Home() {
    // Homepage will contain a list of videos from rubie_shay to view, and allow for navigation to create new content
    // currently this just includes sample hardcoded data

    return (
        <main id="video-list-page">
            <h2>Lessons from rubie_shay</h2>
            <section className="video-list">
                {testData.videos.map((videoData) => (
                    <Link key={videoData.video_id} href={`/videos/${encodeURIComponent(videoData.video_id)}`} className="video-option">
                        <video className="video-thumbnail" src={"/sample_video_files/" + videoData.video_url + "#t=1"}>
                            An error occurred with the video player.
                        </video>
                        <article className="video-details">
                            <h3>{videoData.title}</h3>
                            <h4>Created by <i>{videoData.user_id}</i></h4>
                            <p>{videoData.description}</p>
                        </article>
                    </Link>
                ))}
            </section>
        </main>
    );
}