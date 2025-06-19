export type VideoData = {video_id: string, user_id: string, title: string, video_url: string, description: string};
export type VideoContent = {user_id: string, title: string, video_url: string, description: string};
export type VideoEdit = {video_id: string, title: string, description: string};
export type CommentData = {video_id: string, user_id: string, content: string};
export type UserContextType = {currentUserID: string | null, handleSetCurrentUserID: (newUserID: string | null) => void}
// export type ApiResponse = {success: boolean, errorText?: string, responseValue?: VideoData[] | VideoData | CommentData[] | CommentData}

export type ResponseVideoData = {id: string, user_id: string, title: string, video_url: string, description: string, [key: string]: unknown};
export type ResponseCommentData = {video_id: string, user_id: string, content: string, [key: string]: unknown};