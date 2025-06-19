"use client";

import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../utils/user-data-context";
import { fetchUserVideos } from "../../utils/api-calls";
import { VideoData } from "../../utils/types";
import { getVideoData } from "../../utils/functions";

export default function StudioVideos() {
    // StudioVideos shows your existing videos for you to edit

    const { currentUserID } = useContext(UserDataContext);
    const [userVideos, setUserVideos] = useState<VideoData[]>([]);

    // fetch videos from the api
    const getUserVideos = useCallback(async () => {
        if (currentUserID === null || currentUserID === "") {
            return;
        }
        const videosResponse = await fetchUserVideos(currentUserID);
        if (!videosResponse.success) {
            setUserVideos([]);
            return;
        }
        // get the needed data from the response
        const newUserVideos = getVideoData(videosResponse.responseValue.videos, currentUserID);
        setUserVideos(newUserVideos);
    }, [currentUserID]);

    useEffect(() => {
        getUserVideos();
    }, [getUserVideos]);

    if (userVideos && userVideos.length > 0) {
        return (
            <section className="edit-video-list">
                <ul>
                    {userVideos.map((videoData, index) => (
                        <li key={index}>
                            <Link href={`/content-studio/${encodeURIComponent(videoData.video_id)}`}>
                                <video className="video-thumbnail">
                                    <source src={videoData.video_url + "#t=0.5"}></source>
                                    <source src={"/video-not-found.mp4#t=0.5"}></source>
                                    An error occurred with the video player.
                                </video>
                                <article>
                                    <h4 title={videoData.title}>{videoData.title}</h4>
                                    <span title={videoData.video_url}>{videoData.video_url}</span>
                                </article>
                                <span className="material-symbols material-symbols-outlined">edit</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
    else if (userVideos) {
        return (
            <div className="empty-video-list">{"You haven\u0027t created any videos yet."}</div>
        );
    }
}