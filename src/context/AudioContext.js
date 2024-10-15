import React, { createContext, useState, useContext, useCallback } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [playlist, setPlaylist] = useState({ index: 0, files: [] });
    const [currentAudioFile, setCurrentAudioFile] = useState(null);
    const [audioChange, setAudioChange] = useState(Math.random());

    const setAudioFile = useCallback((audioFile) => {
        setCurrentAudioFile(audioFile);
        setAudioChange(Math.random());
    }, []);

    const setPlaylistFiles = useCallback((files, index = 0) => {
        setPlaylist({ index: index, files });
        setCurrentAudioFile(files[0]);
    }, []);







    const handleNext = useCallback(() => {
        setPlaylist(prevState => {
            const newIndex = prevState.index + 1 >= prevState.files.length ? 0 : prevState.index + 1;
            const updatedPlaylist = {
                ...prevState,
                index: newIndex,
            };
            setAudioFile(updatedPlaylist.files[newIndex]);
            return updatedPlaylist;
        });
    }, [setPlaylist, setAudioFile]);



    const handlePrevious = useCallback(() => {
        setPlaylist(prevState => {
            const newIndex = prevState.index - 1 < 0 ? prevState.files.length - 1 : prevState.index - 1;
            const updatedPlaylist = {
                ...prevState,
                index: newIndex,
            };

            setAudioFile(updatedPlaylist.files[newIndex]);
            return updatedPlaylist;
        });
    }, [setPlaylist, setAudioFile]);






    return (
        <AudioContext.Provider
            value={{ playlist, currentAudioFile, setAudioFile, setPlaylistFiles, handleNext, handlePrevious, audioChange }}
        >
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);