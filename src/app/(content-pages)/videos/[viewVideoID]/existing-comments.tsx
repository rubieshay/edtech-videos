"use client";

// import { useState, useCallback, useEffect } from "react";
// import { fetchComments } from "../../../utils/api-calls";
// import { getCommentsData } from "../../../utils/functions";
import { CommentData } from "../../../utils/types";

export default function ExistingComments({ commentsData } : {commentsData: CommentData[]}) {
    // Existing comments contains comments for the videoID that have already been written

    if (commentsData.length > 0) {
        return (
            <ul>
                {commentsData.map((comment) => (
                    <li key={comment.user_id + comment.content}>
                        <span>{comment.user_id}</span>
                        <p>{comment.content}</p>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <div className="no-comments">
                <div>No comments yet...</div>
                <div>Be the first to talk about this lesson!</div>
            </div>
        );
    }
}