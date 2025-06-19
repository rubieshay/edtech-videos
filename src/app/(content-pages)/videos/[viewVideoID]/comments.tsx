"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import NewComment from "./new-comment";
import ExistingComments from "./existing-comments";
import { fetchComments } from "../../../utils/api-calls";
import { getCommentsData } from "../../../utils/functions";
import { CommentData } from "../../../utils/types";

export default function Comments({ videoID } : {videoID: string}) {
    // Comments will contain the existing comments, and ability to add comments

    // let the Comments component control the comment writing state so the button can open the NewComment Component
    const [isWritingComment, setIsWritingComment] = useState<boolean>(false);
    // let the Comments component control the exisitng data so it is updated when you write a comment
    const [commentsData, setCommentsData] = useState<CommentData[]>([]);
    // timer for waiting after refetch
    const refetchTimer = useRef<number | null>(null);
    
    // fetch comments from the api
    const getComments = useCallback(async () => {
        console.log("getting comments");
        const commentResponse = await fetchComments(videoID);
        if (!commentResponse.success) {
            setCommentsData([]);
            return;
        }
        // get the needed data from the response
        const newCommentsData = getCommentsData(commentResponse.responseValue.comments);
        setCommentsData(newCommentsData);
    }, [videoID]);

    useEffect(() => {
        getComments();
    }, [getComments]);

    function refetchComments() {
        console.log("refetch");
        // wait 2 seconds before fetching the data so it has hopefully been set
        if (refetchTimer.current) {
            clearTimeout(refetchTimer.current);
        }
        refetchTimer.current = window.setTimeout(() => {
            getComments();
        }, 2000);
    }

    return (
        <section className="comments">
            <div className="comments-header">
                <h3>Comments ({commentsData.length})</h3>
                {!isWritingComment ?
                    <button className="icon-text-button" onClick={() => setIsWritingComment(true)}>
                        <span className="material-symbols material-symbols-outlined" aria-hidden="true">add</span>
                        <span>Add Comment</span>
                    </button>
                    :
                    <></>
                }
            </div>
            {isWritingComment ?
                <NewComment setIsWritingComment={setIsWritingComment} refetchComments={refetchComments} videoID={videoID}/>
                :
                <></>
            }
            <ExistingComments commentsData={commentsData}/>
        </section>
    );
}