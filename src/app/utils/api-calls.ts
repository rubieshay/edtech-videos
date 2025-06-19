import { apiURL } from "./constants";
import { CommentData, VideoContent, VideoEdit } from "./types";

// GET /videos (with user_id param)
export async function fetchUserVideos(userID: string) {
    const url = new URL(apiURL + "/videos?user_id=" + encodeURIComponent(userID));
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            console.error("Response failed when fetching user videos with user '" + userID + "' : " + response.statusText);
            return {success: false, errorText: "An error occurred getting videos"};
        }
        const responseData = await response.json();
        return {success: true, responseValue: responseData};
    } catch (error) {
        console.error("Error fetching user videos with user '" + userID + "' : " + error);
        return {success: false, errorText: "An error occurred getting videos"};
    }
}

// POST /videos (with videoContent body)
export async function postUserVideo(videoContent: VideoContent) {
    const url = new URL(apiURL + "/videos");
    const videoBody = JSON.stringify(videoContent);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: videoBody
        });
        if (!response.ok) {
            console.error("Response failed when posting video with body '" + videoBody + "' : " + response.statusText);
            return {success: false, errorText: "An error occurred uploading the video"};
        }
        const responseData = await response.json();
        return {success: true, responseValue: responseData};
    } catch (error) {
        console.error("Error posting user videos with body '" + videoBody + "' : " + error);
        return {success: false, errorText: "An error occurred uploading the video"};
    }
}

// PUT /videos
export async function editUserVideo(videoEdit: VideoEdit) {
    const url = new URL(apiURL + "/videos");
    const videoBody = JSON.stringify(videoEdit);
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: videoBody
        });
        if (!response.ok) {
            console.error("Response failed when putting video with body '" + videoBody + "' : " + response.statusText);
            return {success: false, errorText: "An error occurred editing the video"};
        }
        const responseData = await response.json();
        return {success: true, responseValue: responseData};
    } catch (error) {
        console.error("Error putting video with body '" + videoBody + "' : " + error);
        return {success: false, errorText: "An error occurred editing the video"};
    }
}

// GET /videos/single (with video_id param)
export async function fetchVideoSingle(videoID: string) {
    const url = new URL(apiURL + "/videos/single?video_id=" + encodeURIComponent(videoID));
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            console.error("Response failed when fetching single video with video_id '" + videoID + "' : " + response.statusText);
            return {success: false, errorText: "An error occurred getting the video"};
        }
        const responseData = await response.json();
        return {success: true, responseValue: responseData};
    } catch (error) {
        console.error("Error fetching single video with video_id '" + videoID + "' : " + error);
        return {success: false, errorText: "An error occurred getting the video"};
    }
}

// GET /videos/comments (with video_id param)
export async function fetchComments(videoID: string) {
    const url = new URL(apiURL + "/videos/comments?video_id=" + encodeURIComponent(videoID));
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            console.error("Response failed when fetching comments with video_id '" + videoID + "' : " + response.statusText);
            return {success: false, errorText: "An error occurred getting comments"};
        }
        const responseData = await response.json();
        return {success: true, responseValue: responseData};
    } catch (error) {
        console.error("Error fetching comments with video_id '" + videoID + "' : " + error);
        return {success: false, errorText: "An error occurred getting comments"};
    }
}

// POST /videos/comments (with commentData body)
export async function postComment(commentData: CommentData) {
    const url = new URL(apiURL + "/videos/comments");
    const commentBody = JSON.stringify(commentData);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: commentBody
        });
        if (!response.ok) {
            console.error("Response failed when posting comment with body '" + commentBody + "' : " + response.statusText);
            return {success: false, errorText: "An error occurred posting the comment"};
        }
        const responseData = await response.json();
        return {success: true, responseValue: responseData};
    } catch (error) {
        console.error("Error posting comment with body '" + commentBody + "' : " + error);
        return {success: false, errorText: "An error occurred posting the comment"};
    }
}