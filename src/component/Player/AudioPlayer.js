import React, {useEffect, useRef, useState} from "react"
import "./AudioPlayer.css"

import {
    SkipBack, SkipForward,
    Volume, Volume1, Volume2, VolumeX,
    Heart, Ellipsis,
    Shuffle, Repeat
} from "lucide-react"
import {MdPauseCircleFilled} from "react-icons/md";
import {IoPlayCircle} from "react-icons/io5";
import {buildDuration} from "../../util/Util";
import PlayerSlider from "../Slider/PlayerSlider";


function AudioPlayer({
     audioFile,
     handleNext,
     handlePrevious
}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [isSeeking, setIsSeeking] = useState(false)
    const [volume, setVolume] = useState({
        currentVolume: 0.2,
        lastVolume: 0.2,
        isMuted: false
    })

    const audioRef = useRef(null)


    useEffect(() => {
        audioRef.current.volume = volume.currentVolume
    })

    useEffect(() => {
        console.log("Audio file : ", audioFile)
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [audioFile]);


    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const handleTimeUpdate = () => {
        if(!isSeeking) {
            setCurrentTime(audioRef.current.currentTime)
        }
    }

    const handleVolumeUpdate = (event) => {
        const newVolume = parseFloat(event.target.value)
        console.log("New volume : ", newVolume)
        audioRef.current.volume = newVolume
        setVolume({
            currentVolume: newVolume,
            lastVolume: volume.currentVolume,
            isMuted: newVolume === 0
        })
    }

    const handleMute = (event) => {
        setVolume(prevVolume => {
            const newIsMuted = !prevVolume.isMuted
            const newVolume = {
                currentVolume: newIsMuted ? 0 : prevVolume.lastVolume,
                lastVolume: prevVolume.lastVolume,
                isMuted: newIsMuted
            }
            audioRef.current.volume = newVolume.currentVolume
            return newVolume
        })
    }

    const handleSliderChange = (event) => {
        const newTime = parseFloat(event.target.value)
        setCurrentTime(newTime)
        setIsSeeking(true)
    }

    const handleSlideRelease = (event) => {
        const newTime = parseFloat(event.target.value)
        audioRef.current.currentTime = newTime
        setCurrentTime(newTime)
        setIsSeeking(false)
    }

    if(!audioFile) return (<div> No audio file </div>)

    return (
        <>
            <audio
                ref={audioRef}
                onEnded={() => {
                    handleNext()
                    setCurrentTime(0)
                }
                }
                onTimeUpdate={handleTimeUpdate}
                src={`http://localhost:9090/audio/${audioFile.trackId}.m4a`}>
            </audio>

            <div className="player">
                <div className="container">
                    <div className="controls">

                        <div className={"options-wrapper"}>
                            <div className="options">
                                <Heart
                                    className="icon control"
                                    size={25}
                                    strokeWidth={3}
                                />
                                <Ellipsis
                                    className="icon control"
                                    size={25}
                                    strokeWidth={3}
                                />
                            </div>
                        </div>


                        <div className="buttons-wrapper">
                            <div className="buttons">
                                <Shuffle
                                    className="icon control"
                                    size={25}
                                />
                                <SkipBack
                                    onClick={() => {
                                        handlePrevious()
                                        setCurrentTime(0)
                                    }
                                    }
                                    className="icon control previous"
                                    size={50}
                                    strokeWidth={1.5}
                                    fill={"#ffffff"}
                                />
                                {isPlaying ? (
                                    <MdPauseCircleFilled
                                        onClick={handlePlayPause}
                                        className="icon control pause"
                                        size={80}
                                    />
                                ) : (
                                    <IoPlayCircle
                                        onClick={handlePlayPause}
                                        className="icon control play"
                                        size={80}
                                    />
                                )}
                                <SkipForward
                                    onClick={() => {
                                        handleNext()
                                        setCurrentTime(0)
                                    }
                                    }
                                    className="icon control next"
                                    size={50}
                                    strokeWidth={1.5}
                                    fill={"#ffffff"}
                                />
                                <Repeat
                                    className="icon control"
                                    size={25}
                                />
                            </div>
                        </div>

                        <div className="volume-wrapper">
                            <div className={"volume"}>
                                {volume.currentVolume > 0.75 ? (
                                    <Volume2
                                        className="icon"
                                         size={40}
                                         strokeWidth={1.5}
                                         onClick={handleMute}
                                         fill={"#ffffff"}
                                    />
                                ) : volume.currentVolume > 0.25 ? (
                                    <Volume1
                                        className="icon"
                                        size={40}
                                        strokeWidth={1.5}
                                        onClick={handleMute}
                                        fill={"#ffffff"}
                                    />
                                ) : volume.currentVolume > 0 ? (
                                    <Volume
                                        className="icon"
                                        size={40}
                                        strokeWidth={1.5}
                                        onClick={handleMute}
                                        fill={"#ffffff"}
                                    />
                                ) : (
                                    <VolumeX
                                        className="icon"
                                        size={40}
                                        strokeWidth={1.5}
                                        onClick={handleMute}
                                        fill={"#ffffff"}
                                    />
                                )}
                                <div className="volume-tracker">
                                    <PlayerSlider
                                        value={volume.currentVolume}
                                        min="0"
                                        max="1.0"
                                        step="0.01"
                                        onInput={handleVolumeUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="time-tracker">
                        <span className="current-time">{buildDuration(currentTime)}</span>
                        <PlayerSlider
                                min="0"
                                max={audioRef.current?.duration || 0}
                                value={currentTime}
                                onChange={handleSliderChange}
                                onMouseUp={handleSlideRelease}
                                onTouchEnd={handleSlideRelease}
                            />
                        <span className="total-duration">{buildDuration(audioFile.duration)}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AudioPlayer;
