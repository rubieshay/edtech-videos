"use client";

import { useState, useRef } from "react";
import { getTimeColonString, getRatio } from "../../../utils/functions";

export default function VideoPlayer({ videoURL } : {videoURL: string}) {
    // VideoPlayer is a customized video element with controls

    // element refs
    const videoContainer = useRef<HTMLDivElement | null>(null);
    const videoElement = useRef<HTMLVideoElement | null>(null);
    // timer and state for hiding video controls
    const controlTimeout = useRef<number | null>(null);
    const [controlsHidden, setControlsHidden] = useState<boolean>(false);

    // state used for icon swappping (pause/play, mute/unmute) or visibility of controls (isPlaying)
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    // state used to determine if video should play after changing progress point
    const [wasPaused, setWasPaused] = useState<boolean>(true);
    // state used for video progress
    const [timeCompleted, setTimeCompleted] = useState<number>(0);
    const [videoDuration, setVideoDuration] = useState<number>(0);
    // const [currentTimepoint, setCurrentTimepoint] = useState<number>(0);
    // state used for sliders (volume value from 0 to 1, playback value from 0.25 to 3)
    // default to full volume and 1x speed
    const [volumeValue, setVolumeValue] = useState<number>(1);
    const [playbackSpeedValue, setPlaybackSpeedValue] = useState<number>(1);
    // state for fullscreen
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    // set the duration once we loaded metadata
    function handleUpdateDuration() {
        if (videoElement.current === null) {
            return;
        }
        setVideoDuration(videoElement.current.duration);
    }

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

    function handleChangeTimepoint(newTimepoint: number) {
        if (videoElement.current === null) {
            return;
        }
        videoElement.current.currentTime = newTimepoint;
        // setCurrentTimepoint(getRatio(timeCompleted, 0, videoDuration));
    }
    function handleStopChangingTime() {
        if (!wasPaused) {
            playVideo();
        }
    }

    function playVideo() {
        if (videoElement.current === null) {
            return;
        }
        // set states
        setIsPlaying(true);
        setWasPaused(false);
        // play the video
        if (videoElement.current.ended) {
            videoElement.current.currentTime = 0;
        }
        videoElement.current.play();
        // change previously paused state
    }
    function pauseVideo() {
        if (videoElement.current === null) {
            return;
        }
        // set states
        setIsPlaying(false);
        // pause the video
        videoElement.current.pause();
    }
    function handlePlayPause() {
        if (videoElement.current === null) {
            return;
        }
        if (videoElement.current.paused || videoElement.current.ended) {
            // setWasPaused(false);
            playVideo();
        } else {
            // only make true if it was paused manually
            setWasPaused(true);
            pauseVideo();
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
            <div className={"video-player" + (isPlaying || controlsHidden ? "" : " video-paused")}
            ref={videoContainer} onMouseMove={resetControlTimer}>
                <video preload="metadata" ref={videoElement}
                className={isFullscreen ? "video-fullscreen" : ""}
                aria-labelledby="video-label"
                onTimeUpdate={handleTimeUpdate} onClick={handlePlayPause} onLoadedMetadata={handleUpdateDuration}>
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
                        <li id="duration-display" className="video-time-display">
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
                    <div className="video-progress">
                        <div className="range-element">
                            <div className="range-input">
                                <input type="range" min="0" max={isNaN(videoDuration) ? 0 : videoDuration} step="0.01"
                                value={timeCompleted} aria-label="scrub bar" aria-describedby="duration-display"
                                onChange={(event) => handleChangeTimepoint(Number(event.target.value))}
                                onFocus={pauseVideo} onPointerDown={pauseVideo}
                                onBlur={handleStopChangingTime} onPointerUp={handleStopChangingTime}/>
                                <div className="range-track" aria-hidden="true"
                                style={{"--range-percent": getRatio(Math.round(timeCompleted*100)/100, 0, videoDuration)} as React.CSSProperties}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

