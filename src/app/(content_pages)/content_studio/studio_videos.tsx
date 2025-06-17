import Link from "next/link";
import testData from "../../utils/test_data.json";

export default function StudioVideos() {
    // StudioVideos shows your existing videos for you to edit
    const sampleUserID = "rubie_shay";
    const yourVideos = testData.videos.filter((video) => video.user_id === sampleUserID);

    return (
        <section className="edit-video-list">
            <ul>
                {yourVideos.map((videoData) => (
                    <li key={videoData.video_id}>
                        <Link href={`/content_studio/${encodeURIComponent(videoData.video_id)}`}>
                            <video className="video-thumbnail">
                                <source src={"/sample_video_files/" + videoData.video_url + "#t=1"}></source>
                                <source src={"/video_not_found.mp4#t=1"}></source>
                                An error occurred with the video player.
                            </video>
                            <h4 title={videoData.title}>{videoData.title}</h4>
                            <span className="material-symbols-outlined">edit</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}