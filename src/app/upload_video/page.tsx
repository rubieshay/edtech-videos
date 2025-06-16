"use client";

import Link from "next/link";
import { useState } from "react";

export default function UploadVideo() {
    // UploadVideo allows the user to add their content and create a new video object

    // state for either showing form, or confirmation message afterward
    const [isCreating, setIsCreating] = useState<boolean>(true);
    // states for form elements
    const [titleValue, setTitleValue] = useState<string>("");
    const [videoURLValue, setVideoURLValue] = useState<string>("");
    const [descriptionValue, setDescriptionValue] = useState<string>("");

    function handleSubmit() {
        console.log("Submitted");
        setIsCreating(false);
        // reset form values
        setTitleValue("");
        setVideoURLValue("");
        setDescriptionValue("");
    }

    if (isCreating) {
        return (
            <main id="upload-video-form">
                <h2>Upload A Video</h2>
                <h3>Uploading as rubie_shay</h3>
                <form className="entry-form" onSubmit={handleSubmit}>
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
                    <input className="form-button" type="submit" value="Upload"/>
                </form>
            </main>
        );
    } else {
        return (
            <main id="upload-video-success">
                <h2>Your video was uploaded successfully!</h2>
                <div>
                    <Link href="/videos" className="button-link">Back to Home</Link>
                    <button onClick={() => setIsCreating(true)}>Upload Another Video</button>
                </div>
            </main>
        );
    }
}