"use client";

import { useState } from "react";
import VideoList from "./video-results";
import VideosSearch from "./video-search";

export default function VideosHome() {
    // VideosHome contains a searchbar and list of videos from the searched user_id
    const [searchedUserID, setSearchedUserID] = useState<string | null>(null);

    return (
        <main id="video-results-page">
            <VideosSearch setSearchedUserID={setSearchedUserID}/>
            {(searchedUserID !== null && searchedUserID !== "") ?
                <VideoList searchedUserID={searchedUserID}/>
                :
                <div className="empty-video-results">Search for a user to find videos</div>
            }
        </main>
    );
}