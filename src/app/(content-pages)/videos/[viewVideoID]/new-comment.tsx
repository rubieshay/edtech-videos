"use client";

import { FormEvent, useContext, useState } from "react";
import { UserDataContext } from "../../../utils/user-data-context";
import { postComment } from "../../../utils/api-calls";

export default function NewComment({ setIsWritingComment, refetchComments, videoID }: {setIsWritingComment: React.Dispatch<React.SetStateAction<boolean>>, refetchComments: () => void, videoID: string}) {
    // NewComment is how you can add a new comment to a video

    const { currentUserID } = useContext(UserDataContext);
    const [commentText, setCommentText] = useState<string>("");

    function handleCancelComment(event: FormEvent) {
        event.preventDefault();
        setCommentText("");
        setIsWritingComment(false);
        refetchComments();
    }
    function handlePostComment(event: FormEvent) {
        event.preventDefault();
        if (commentText === "" || currentUserID === null) {
            return;
        }
        setCommentText("");
        setIsWritingComment(false);
        // post comment data with api and refetch the comments so it appears
        const newCommentData = {video_id : videoID, user_id : currentUserID, content: commentText}
        postComment(newCommentData);
        refetchComments();
    }

    return (
        <form className="new-comment" onSubmit={(event) => handlePostComment(event)}>
            <span>{currentUserID}</span>
            <textarea aria-label="comment text input" value={commentText} placeholder="Start writing..."
            onChange={(event) => setCommentText(event.target.value)}></textarea>
            <div className="form-end-buttons">
                <input type="button" value="Cancel" onClick={(event) => handleCancelComment(event)}/>
                <input type="submit" value="Post" className={commentText !== "" ? "" : "button-disabled"}/>
            </div>
        </form>
    );
}