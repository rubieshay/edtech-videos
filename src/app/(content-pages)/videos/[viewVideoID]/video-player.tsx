"use client";

import { useState, useRef, useEffect } from "react";
import { getTimeColonString, getRatio } from "../../../utils/functions";

export default function VideoPlayer({ videoURL } : {videoURL: string}) {
    // VideoPlayer is a customized video element with controls

    // element refs
    const videoContainer = useRef<HTMLDivElement | null>(null);
    const videoElement = useRef<HTMLVideoElement | null>(null);
    // timer and state for hiding video controls
    const controlTimeout = useRef<number | null>(null);
    const [controlsHidden, setControlsHidden] = useState<boolean>(true);

    // state used for icon swappping (pause/play, mute/unmute)
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    // state used for video progress
    const [timeCompleted, setTimeCompleted] = useState<number>(0);
    const [videoDuration, setVideoDuration] = useState<number>(0);
    // state used for sliders (volume value from 0 to 1, playback value from 0.25 to 3)
    // default to full volume and 1x speed
    const [volumeValue, setVolumeValue] = useState<number>(1);
    const [playbackSpeedValue, setPlaybackSpeedValue] = useState<number>(1);
    // state for fullscreen
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    // set the duration once we have the element ref
    useEffect(() => {
        if (videoElement.current !== null) {
            setVideoDuration(videoElement.current.duration);
        }
    }, [videoElement]);

    // timeout video controls if mouse doesn't move
    function resetControlTimer() {
        if (controlTimeout.current) {
            clearTimeout(controlTimeout.current);
        }
        setControlsHidden(false);
        controlTimeout.current = window.setTimeout(() => {
            setControlsHidden(true);
        }, 2800);
    }

    function handleTimeUpdate() {
        // set the current time and duration (in case we don't have it)
        if (videoElement.current === null) {
            setTimeCompleted(0);
        } else {
            setTimeCompleted(videoElement.current.currentTime);  
            setVideoDuration(videoElement.current.duration);
        }
    }

    function handlePlayPause() {
        if (videoElement.current === null) {
            return;
        }
        if (videoElement.current.paused || videoElement.current.ended) {
            // make the icon change accordingly
            setIsPlaying(true);
            // play the video
            if (videoElement.current.ended) {
                videoElement.current.currentTime = 0;
            }
            videoElement.current.play();
        } else {
            // make the icon change accordingly
            setIsPlaying(false);
            // pause the video
            videoElement.current.pause();
        }

    }

    function handleMute() {
        if (videoElement.current === null) {
            return;
        }
        // make the icon change accordingly
        setIsMuted(!videoElement.current.muted);
        // mute the video
        videoElement.current.muted = !videoElement.current.muted;
    }

    function handleVolumeChange(newVolumeValue: number) {
        if (videoElement.current === null) {
            return;
        }
        // unmute the video and change icon if needed
        setIsMuted(false);
        videoElement.current.muted = false;
        // change the volume value
        setVolumeValue(newVolumeValue);
        videoElement.current.volume = newVolumeValue;
    }

    function handlePlaybackSpeedChange(newPlaybackSpeedValue: number) {
        if (videoElement.current === null) {
            return;
        }
        // change the speed value
        setPlaybackSpeedValue(newPlaybackSpeedValue);
        videoElement.current.playbackRate = newPlaybackSpeedValue;
    }

    function handleFullscreen() {
        if (videoElement.current === null || videoContainer.current === null) {
            return;
        }
        // request or close fullscreen
        if (document.fullscreenElement === null) {
            videoContainer.current.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }


    if (videoURL) {
        return (
            <div className={"video-player" + (isPlaying ? "" : " video-paused")}
            ref={videoContainer} onMouseMove={resetControlTimer}>
                <video className={isFullscreen ? "video-fullscreen" : ""}
                aria-labelledby="video-label" ref={videoElement}
                onTimeUpdate={handleTimeUpdate} onClick={handlePlayPause}>
                    <source src={videoURL}></source>
                    <source src={"/video-not-found.mp4"}></source>
                    An error occurred with the video player.
                </video>
                <div className={"video-controls" + (controlsHidden ? "" : " video-controls-visible")}>
                    <ul className="video-control-set video-controls-left">
                        <li>
                            <button className="material-symbols material-symbols-filled"
                            title="play/pause" aria-label="play/pause"
                            onClick={handlePlayPause}>
                                {isPlaying ? "pause" : "play_arrow"}
                            </button>
                        </li>
                        <li className="video-time-display">
                            {getTimeColonString(timeCompleted) + " / " + getTimeColonString(videoDuration)}
                        </li>
                    </ul>
                    <ul className="video-control-set video-controls-right">
                        <li className="video-slider-control">
                            <button className="material-symbols material-symbols-filled"
                            title="volume mute" aria-label="volume mute"
                            onClick={handleMute}>
                                {isMuted ? "volume_off" : "volume_up"}
                            </button>
                            <div className="range-element">
                                <div className="range-input">
                                    <input type="range" min="0" max="1" step="0.01" value={volumeValue}
                                    aria-label="volume"
                                    onChange={(event) => handleVolumeChange(Number(event.target.value))}/>
                                    <div className="range-track" aria-hidden="true"
                                    style={{"--range-percent": getRatio(volumeValue, 0, 1)} as React.CSSProperties}></div>
                                </div>
                                <div className="range-number" style={{"--range-number-width": "2.5em"} as React.CSSProperties}>{Math.round(volumeValue*100).toString() + "%"}</div>
                            </div>
                        </li>
                        <li className="video-slider-control">
                            <div className="material-symbols material-symbols-filled"
                            title="playback speed" aria-label="playback speed">
                                settings_timelapse
                            </div>
                            <div className="range-element">
                                <div className="range-input">
                                    <input type="range" min="0.25" max="3" step="0.25" value={playbackSpeedValue}
                                    aria-label="playback speed"
                                    onChange={(event) => handlePlaybackSpeedChange(Number(event.target.value))}/>
                                    <div className="range-track" aria-hidden="true"
                                    style={{"--range-percent": getRatio(playbackSpeedValue, 0.25, 3)} as React.CSSProperties}></div>
                                </div>
                                <div className="range-number" style={{"--range-number-width": "2.5em"} as React.CSSProperties}>{playbackSpeedValue.toFixed(2) + "x"}</div>
                            </div>
                        </li>
                        <li>
                            <button className="material-symbols material-symbols-filled"
                            title="fullscreen" aria-label="fullscreen"
                            onClick={() => handleFullscreen()}>
                                fullscreen
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

