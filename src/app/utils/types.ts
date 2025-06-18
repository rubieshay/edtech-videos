import { SetStateAction } from "react";

export type VideoData = {video_id: string, user_id: string, title: string, video_url: string, description: string};
export type CommentData = {video_id: string, user_id: string, content: string};
export type UserContextType = {currentUserID: string | null, setCurrentUserID: React.Dispatch<SetStateAction<string | null>>}