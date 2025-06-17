"use client";

import { useState } from "react";

export default function NewComment({ setIsWritingComment }: {setIsWritingComment: React.Dispatch<React.SetStateAction<boolean>>}) {
    // NewComment is how you can add a new comment to a video

    const [commentText, setCommentText] = useState<string>("");

    function handleCancelComment() {
        setCommentText("");
        setIsWritingComment(false);
    }
    function handlePostComment() {
        if (commentText == "") {
            return;
        }
        setCommentText("");
        setIsWritingComment(false);
        console.log("posted comment");
    }

    return (
        <form className="new-comment">
            <span>commenters_user_id_here</span>
            <textarea aria-label="comment text input" value={commentText} onChange={(event) => setCommentText(event.target.value)}></textarea>
            <div>
                <button onClick={() => handleCancelComment()}>Cancel</button>
                <button className={(commentText !== "") ? "" : "button-disabled"} onClick={() => handlePostComment()}>Post</button>
            </div>
        </form>
    );
}