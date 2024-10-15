import React, { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar/Sidebar";
import AudioPlayer from "../component/Player/AudioPlayer";
import { customFetch } from "../util/CustomFetch";
import "./MainLayout.css";
import PageTitle from "../component/title/PageTitle";
import { useAudio } from "../context/AudioContext";

const MainLayout = (callback, deps) => {
    const [currentAudioRequest] = useState("api/track/");
    const { currentAudioFile, setPlaylistFiles, playlist } = useAudio();


    useEffect(() => {
        console.log(currentAudioFile)
    }, [currentAudioFile])

    useEffect(() => {
        customFetch(currentAudioRequest)
            .then(response => response.json())
            .then(data => {
                setPlaylistFiles(data);
                console.log("playlist : ", playlist)
            }).catch(error => {
            console.error("Error fetching audio files: ", error);
        })
    }, [currentAudioRequest]);

    return (
        <>
            <PageTitle title="Fraudify" />
            <div className="main-layout-wrapper">
                <div className={"sidebar-container"}>
                    <Sidebar />
                </div>
                <div className={"main-container"}>
                    <Outlet />
                </div>



                {currentAudioFile ? (
                    <>
                        <AudioPlayer/>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
};

export default MainLayout;