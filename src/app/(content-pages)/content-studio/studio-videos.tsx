"use client";

import Link from "next/link";
import { useContext } from "react";
import testData from "../../utils/test-data.json";
import { UserDataContext } from "@/app/utils/user-data-context";

export default function StudioVideos() {
    // StudioVideos shows your existing videos for you to edit

    const {currentUserID} = useContext(UserDataContext);

    // Filter the list to not include "deleted" videos
    // Since there isn't a delete api call, we can edit the video to a blank video and filter based on this
    const userVideos = testData.videos.filter((video) => video.user_id === currentUserID && video.video_url !== "" && video.title !== "");

    if (userVideos && userVideos.length > 0) {
        return (
            <section className="edit-video-list">
                <ul>
                    {userVideos.map((videoData) => (
                        <li key={videoData.video_id}>
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