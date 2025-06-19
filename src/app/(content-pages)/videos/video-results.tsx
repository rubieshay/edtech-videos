import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { fetchUserVideos } from "../../utils/api-calls";
import { VideoData } from "../../utils/types";
import { getVideoData } from "../../utils/functions";

export default function VideoResults({ searchedUserID }: {searchedUserID: string}) {
    // VideoResults contains the resulting list of videos based on the searched user
    const [userVideos, setUserVideos] = useState<VideoData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // fetch videos from the api
    const getUserVideos = useCallback(async () => {
        if (searchedUserID === "") {
            return;
        }
        const videosResponse = await fetchUserVideos(searchedUserID);
        if (!videosResponse.success) {
            setUserVideos([]);
            return;
        } 
        // get the needed data from the response
        const newUserVideos = getVideoData(videosResponse.responseValue.videos, searchedUserID);
        setUserVideos(newUserVideos);
        setIsLoading(false);
    }, [searchedUserID]);

    useEffect(() => {
        setIsLoading(true);
        getUserVideos();
    }, [getUserVideos]);

    if (isLoading) {
        return (
            <div className="loading-indicator material-symbols material-symbols-outlined" title="loading">progress_activity</div>
        );
    }
    if (userVideos && userVideos.length > 0) {
        return (
            <section className="video-results">
                <h2>Lessons from <i>{searchedUserID}</i></h2>
                <ul>
                    {userVideos.map((videoData) => (
                        <li key={videoData.video_id}>
                            <Link href={`/videos/${encodeURIComponent(videoData.video_id)}`}>
                                <video className="video-thumbnail" preload="metadata">
                                    <source src={videoData.video_url + "#t=0.5"}></source>
                                    <source src={"/video-not-found.mp4#t=0.5"}></source>
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
            <div className="empty-video-results">No videos found by user <i>{"\u201c" + searchedUserID + "\u201d" + "."}</i></div>
        );
    }
}