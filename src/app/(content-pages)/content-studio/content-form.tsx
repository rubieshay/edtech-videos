"use client";

import { VideoData } from "../../utils/types";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

export default function ContentForm({ existingVideoData }: { existingVideoData: null | VideoData}) {
    // ContentForm allows the user to add their content and create a new video object or edit an existing video object
    
    // state for either showing form, or confirmation message afterward
    const [isCreating, setIsCreating] = useState<boolean>(true);
    // states for form elements
    const [titleValue, setTitleValue] = useState<string>("");
    const [videoURLValue, setVideoURLValue] = useState<string>("");
    const [descriptionValue, setDescriptionValue] = useState<string>("");

    // set starting values based off of isEditPage
    useEffect(() => {
        if (existingVideoData !== null) {
            setTitleValue(existingVideoData.title);
            setVideoURLValue(existingVideoData.video_url);
            setDescriptionValue(existingVideoData.description);
        }
    }, [existingVideoData]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log("Submitted");
        setIsCreating(false);
        // reset form values
        setTitleValue("");
        setVideoURLValue("");
        setDescriptionValue("");
    }

    if (isCreating) {
        return (
            <main id="content-video-form">
                <h2>{existingVideoData === null ? "Upload Video" : "Editing Video"}</h2>
                <h3>Signed in as <i>rubie_shay</i></h3>
                <form className="entry-form" onSubmit={(event) => handleSubmit(event)}>
                    <div className="form-input">
                        <label htmlFor="title-input">Title <i>(Required)</i></label>
                        <input id="title-input" type="text" required aria-required="true"
                        autoComplete="off" value={titleValue}
                        onChange={(event) => setTitleValue(event.target.value)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="url-input">Video URL <i>(Required)</i></label>
                        <input id="url-input" type="text" required aria-required="true"
                        autoComplete="off" value={videoURLValue}
                        onChange={(event) => setVideoURLValue(event.target.value)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="description-input">Description</label>
                        <textarea id="description-input" wrap="soft"
                        autoComplete="off" value={descriptionValue}
                        onChange={(event) => setDescriptionValue(event.target.value)}></textarea>
                    </div>
                    <div className="form-end-buttons">
                        <Link href="/content-studio" className="button-link">Cancel</Link>
                        <input className="form-button" type="submit" value={existingVideoData === null ? "Upload" : "Update"}/>
                    </div>
                </form>
            </main>
        );
    } else {
        return (
            <main id="content-form-success">
                <h2>Your video was {existingVideoData === null ? "uploaded" : "updated"} successfully!</h2>
                <Link href="/content-studio" className="button-link">Back to Content Studio</Link>
            </main>
        );
    }
}