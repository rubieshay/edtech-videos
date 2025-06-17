"use client";

import testData from "../../../utils/test_data.json";

export default function ExistingComments({ videoID } : {videoID: string}) {
    // Existing comments contains comments for the videoID that have already been written

    const commentsData = testData.comments.filter((comment) => comment.video_id === videoID);

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