"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchVideoSingle } from "../../../utils/api-calls";
import VideoPlayer from "./video-player";
import { VideoData } from "@/app/utils/types";

export default function VideoViewer({ videoID } : {videoID: string}) {
    // VideoViewer will contain the title, description, and video player

    const [videoData, setVideoData] = useState<VideoData | null>(null);
        
    // fetch video from the api
    const getVideo = useCallback(async () => {
        const videoResponse = await fetchVideoSingle(videoID);
        if (!videoResponse.success) {
            setVideoData(null);
            return;
        }
        // get the needed data from the response
        const video = videoResponse.responseValue.video
        const editVideo = {video_id: video.id, user_id: video.user_id, video_url: video.video_url, title: video.title, description: video.description};
        setVideoData(editVideo);
    }, [videoID]);

    useEffect(() => {
        getVideo();
    }, [getVideo]);

    if (videoData) {
        return (
            <section className="video-viewer">
                <h2 id="video-label" title={videoData.title}>{videoData.title}</h2>
                <VideoPlayer videoURL={videoData.video_url}/>
                <div className="description">
                    <h4 title={"Created by " + videoData.user_id}>Created by <i>{videoData.user_id}</i></h4>
                    {videoData.description === "" ?
                        <></>
                        :
                        <p>{videoData.description}</p>
                    }
                </div>
            </section>
        );
    }
}