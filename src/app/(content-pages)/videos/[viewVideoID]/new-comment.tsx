"use client";

import { useContext, useState } from "react";
import { UserDataContext } from "../../../utils/user-data-context";

export default function NewComment({ setIsWritingComment }: {setIsWritingComment: React.Dispatch<React.SetStateAction<boolean>>}) {
    // NewComment is how you can add a new comment to a video

    const {currentUserID} = useContext(UserDataContext);
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
            <span>{currentUserID}</span>
            <textarea aria-label="comment text input" value={commentText} onChange={(event) => setCommentText(event.target.value)}></textarea>
            <div className="form-end-buttons">
                <input type="button" value="Cancel" onClick={() => handleCancelComment()}/>
                <input type="submit" value="Post" className={commentText !== "" ? "" : "button-disabled"} onClick={() => handlePostComment()}/>
            </div>
        </form>
    );
}