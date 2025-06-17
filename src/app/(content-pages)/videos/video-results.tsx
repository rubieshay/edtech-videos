import Link from "next/link";
import testData from "../../utils/test-data.json";

export default function VideoResults({ searchedUserID }: {searchedUserID: string}) {
    // VideoResults contains the resulting list of videos based on the searched user

    const userVideos = testData.videos.filter((video) => video.user_id === searchedUserID);

    if (userVideos && userVideos.length > 0) {
        return (
            <section className="video-results">
                <h2>Lessons from <i>{searchedUserID}</i></h2>
                <ul>
                    {userVideos.map((videoData) => (
                        <li key={videoData.video_id}>
                            <Link href={`/videos/${encodeURIComponent(videoData.video_id)}`}>
                                <video className="video-thumbnail">
                                    <source src={videoData.video_url + "#t=1"}></source>
                                    <source src={"/video-not-found.mp4#t=1"}></source>
                                    An error occurred with the video player.
                                </video>
                                <article>
                                    <h3 title={videoData.title}>{videoData.title}</h3>
                                    <h4 title={"Created by " + videoData.user_id}>Created by <i>{videoData.user_id}</i></h4>
                                    <p>{videoData.description}</p>
                                </article>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
    } else if (userVideos) {
        return (
            <div className="empty-video-results">No videos found by user <i>{"\u201c" + searchedUserID + "\u201d"}</i></div>
        );
    }
}