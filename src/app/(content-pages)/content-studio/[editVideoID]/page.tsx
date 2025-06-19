"use client";

import { fetchVideoSingle } from "@/app/utils/api-calls";
import ContentForm from "../content-form";
import { useCallback, useEffect, useState } from "react";
import { VideoData } from "../../../utils/types";

export default function EditVideo({ params }: {params: Promise<{ editVideoID: string }>}) {
    // EditVideo allows the user to edit one of their existing videos or "delete" it
    // Since there isn't a delete api call, we can edit the video to a blank video and filter based on this

    const [editVideoData, setEditVideoData] = useState<VideoData | null>(null);
    
    // fetch video from the api
    const getVideo = useCallback(async () => {
        const editVideoID = (await params).editVideoID;
        const videoResponse = await fetchVideoSingle(editVideoID);
        if (!videoResponse.success) {
            setEditVideoData(null);
            return;
        }
        // get the needed data from the response
        const video = videoResponse.responseValue.video
        const editVideo = {video_id: video.id, user_id: video.user_id, video_url: video.video_url, title: video.title, description: video.description};
        setEditVideoData(editVideo);
    }, [params]);

    useEffect(() => {
        getVideo();
    }, [getVideo]);

    if (editVideoData) {
        return (
            <ContentForm existingVideoData={editVideoData}/>
        );
    }
}