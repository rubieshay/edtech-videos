"use client";

import { useState } from "react";
import NewComment from "./new_comment";
import ExistingComments from "./existing_comments";

export default function Comments({ videoID } : {videoID: string}) {
    // Comments will contain the existing comments, and ability to add comments

    const [isWritingComment, setIsWritingComment] = useState<boolean>(false);

    return (
        <section className="comments">
            <div className="comments-header">
                <h3>Comments</h3>
                {!isWritingComment ?
                    <button className="icon-text-button" onClick={() => setIsWritingComment(true)}>
                        <span className="material-symbols-outlined" aria-hidden="true">add</span>
                        <span>Add Comment</span>
                    </button>
                    :
                    <></>
                }
            </div>
            {isWritingComment ?
                <NewComment setIsWritingComment={setIsWritingComment}/>
                :
                <></>
            }
            <ExistingComments videoID={videoID}/>
        </section>
    );
}