"use client";

import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../utils/user-data-context";
import { VideoData } from "../../utils/types";
import { editUserVideo, postUserVideo } from "@/app/utils/api-calls";

export default function ContentForm({ existingVideoData }: { existingVideoData: null | VideoData}) {
    // ContentForm allows the user to add their content and create a new video object or edit an existing video object
    
    const { currentUserID } = useContext(UserDataContext);
    // state for either showing form, or confirmation message afterward
    const [isCreating, setIsCreating] = useState<boolean>(true);
    // states for form elements
    const [titleValue, setTitleValue] = useState<string>("");
    const [videoURLValue, setVideoURLValue] = useState<string>("");
    const [descriptionValue, setDescriptionValue] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    // set starting values based off of isEditPage
    useEffect(() => {
        if (existingVideoData !== null) {
            setTitleValue(existingVideoData.title);
            setVideoURLValue(existingVideoData.video_url);
            setDescriptionValue(existingVideoData.description);
        }
    }, [existingVideoData]);

    async function handlePost() {
        if (existingVideoData !== null || currentUserID === null || titleValue === "" || videoURLValue === "") {
            return;
        }
        // set the body
        const videoContent = {user_id: currentUserID, video_url: videoURLValue, title: titleValue, description: descriptionValue};
        // call the POST api
        const apiResponse = await postUserVideo(videoContent);
        if (apiResponse.success) {
            setSuccessMessage("Your video was uploaded successfully");
        } else {
            setSuccessMessage(apiResponse.errorText ?? "");
        }
        setIsCreating(false);
    }

    async function handleEdit(isDeleting: boolean) {
        if (existingVideoData === null) {
            return;
        }
        // set the corresponding body
        let videoEdit = {video_id: existingVideoData.video_id, title: "", description: ""};
        if (!isDeleting) {
            if (titleValue === "") {
                return;
            }
            videoEdit = {video_id: existingVideoData.video_id, title: titleValue, description: descriptionValue};
        }
        // call the PUT api
        const apiResponse = await editUserVideo(videoEdit);
        if (apiResponse.success) {
            if (isDeleting) {
                setSuccessMessage("Your video was deleted successfully");
            } else {
                setSuccessMessage("Your video was edited successfully");   
            }
        } else {
            setSuccessMessage(apiResponse.errorText ?? "");
        }
        setIsCreating(false);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        // this will use the post or edit video api to add the corresponding values
        if (existingVideoData) {
            // updating not deleting, so isDeleting = false
            handleEdit(false);
        } else {
            handlePost();
        }

        // reset form values
        setTitleValue("");
        setVideoURLValue("");
        setDescriptionValue("");
    }

    function handleDelete() {
        // this will use the edit video api to change all values to "" which will be filtered from video searches since there is no delete command (isDeleting=true)
        handleEdit(true);
    }

    if (isCreating) {
        return (
            <main id="content-video-form">
                <div>
                    <div>
                        <h2>{existingVideoData === null ? "Upload Video" : "Editing Video"}</h2>
                        <h3>Signed in as <i>{currentUserID}</i></h3>
                    </div>
                    {existingVideoData === null ?
                        <></>
                        :
                        <button className="warning-button" onClick={handleDelete}>Delete</button>
                    }
                </div>
                {/* show the url if you are editing since it cannot be changed */}
                {existingVideoData === null ?
                    <></>
                    :
                    <div className="existing-url">Video URL: <i>{existingVideoData.video_url}</i></div>
                }
                <form className="entry-form" onSubmit={(event) => handleSubmit(event)}>
                    <div className="form-input">
                        <label htmlFor="title-input">Title <em>*Required</em></label>
                        <input id="title-input" type="text" required aria-required="true"
                        autoComplete="off" value={titleValue}
                        onChange={(event) => setTitleValue(event.target.value)}/>
                    </div>
                    {/* You can't edit the url of an existing video */}
                    {existingVideoData === null ?
                        <div className="form-input">
                            <label htmlFor="url-input">Video URL <em>*Required</em></label>
                            <input id="url-input" type="text" required aria-required="true"
                            autoComplete="off" value={videoURLValue}
                            onChange={(event) => setVideoURLValue(event.target.value)}/>
                        </div>
                        :
                        <></>
                    }
                    <div className="form-input">
                        <label htmlFor="description-input">Description</label>
                        <textarea id="description-input" wrap="soft"
                        autoComplete="off" value={descriptionValue}
                        onChange={(event) => setDescriptionValue(event.target.value)}></textarea>
                    </div>
                    <div className="form-end-buttons">
                        <Link href="/content-studio" className="button-link">Cancel</Link>
                        <input className={"form-button " +
                        ((titleValue !== "" && videoURLValue !== "") ? "" : "button-disabled")}
                        type="submit" value={existingVideoData === null ? "Upload" : "Update"}/>
                    </div>
                </form>
            </main>
        );
    } else {
        return (
            <main id="content-form-success">
                <h2>{successMessage}</h2>
                <Link href="/content-studio" className="button-link">Back to Content Studio</Link>
            </main>
        );
    }
}