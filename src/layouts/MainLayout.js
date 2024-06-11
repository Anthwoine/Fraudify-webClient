import React, { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar/Sidebar";
import AudioPlayer from "../component/Player/AudioPlayer";
import { customFetch } from "../util/CustomFetch";
import CurrentTrackCard from "../component/card/CurrentTrackCard";
import "./MainLayout.css";
import PageTitle from "../component/title/PageTitle";

const MainLayout = () => {
    const [currentAudioRequest] = useState("api/track/");
    const [audioFiles, setAudioFiles] = useState({
        index: 0,
        files: []
    });

    useEffect(() => {
        customFetch(currentAudioRequest)
            .then(response => response.json())
            .then(data => {
                setAudioFiles({
                    index: 0,
                    files: data
                });
                console.log("Data : ", data);
            })
            .catch(error => {
                console.log("Error fetch : ", error);
            });
    }, [currentAudioRequest]);

    const handleNext = useCallback(() => {
        setAudioFiles(prevState => ({
            ...prevState,
            index: prevState.index + 1 < prevState.files.length ? prevState.index + 1 : 0
        }));
    }, []);

    const handlePrevious = useCallback(() => {
        setAudioFiles(prevState => ({
            ...prevState,
            index: prevState.index - 1 >= 0 ? prevState.index - 1 : prevState.files.length - 1
        }));
    }, []);

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



                {audioFiles.files.length > 0 ? (
                    <>
                        <AudioPlayer
                            audioFile={audioFiles.files[audioFiles.index]}
                            handleNext={handleNext}
                            handlePrevious={handlePrevious}
                        />
                        <CurrentTrackCard
                            audioFile={audioFiles.files[audioFiles.index]}
                        />
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
};

export default MainLayout;