import { CommentData, ResponseCommentData, ResponseVideoData, VideoData } from "./types";

export function getTimeColonString(timeInSeconds: number): string {
    if (isNaN(timeInSeconds)) {
        return "0:00";
    }
    const hoursNum = Math.floor(timeInSeconds / 3600);
    const minutesNum = Math.floor((timeInSeconds - (hoursNum * 3600)) / 60);
    const secondsNum = Math.round(timeInSeconds - (hoursNum * 3600) - (minutesNum * 60));

    if (hoursNum > 0) {
        return hoursNum.toString() + ":" + minutesNum.toString().padStart(2, "0") + ":" + secondsNum.toString().padStart(2, "0");
    } else {
        return minutesNum.toString() + ":" + secondsNum.toString().padStart(2, "0");
    }
}

export function getRatio(value: number, minimum: number, maximum: number) {
    if (maximum - minimum === 0) {
        return 0;
    }
    return (value - minimum) / (maximum - minimum)
}

export function getVideoData(videosList: ResponseVideoData[], selectedUserID: string): VideoData[] {
    // filter: don't include irrelevant or "deleted videos" (which are created by removing title and description)
    // map: get video_id, user_id, video_url, title, description
    return videosList.filter((video: ResponseVideoData) => video.user_id === selectedUserID && video.title !== "").map((video: ResponseVideoData) => ({video_id: video.id, user_id: video.user_id, video_url: video.video_url, title: video.title, description: video.description}));
}

export function getCommentsData(commentList: ResponseCommentData[]): CommentData[] {
    // map: get video_id, user_id, content
    return commentList.map((comment: ResponseCommentData) => ({video_id: comment.video_id, user_id: comment.user_id, content: comment.content}));
}