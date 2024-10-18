import PageTitle from "../../component/title/PageTitle"
import LoginInput from "../../component/input/login/LoginInput"
import { Search } from "lucide-react"
import {useCallback, useEffect, useRef, useState} from "react"
import "./search.scss"
import {getAudioFileByTitle} from "../../service/AudioService"
import AudioCard from "../../component/card/AudioCard"

function Browse({ testProps }) {
    const [audioFiles, setAudioFiles] = useState(null);
    const [searchValue, setSearchValue] = useState("");

    const searchRef = useRef();

    useEffect(() => {
        console.log("test : ", testProps)
        searchRef.current?.focus();
        searchAudio()
    }, []);

    useEffect(() => {
        searchAudio(searchValue)
    }, [searchValue]);

    const handleInputChange = useCallback((event) => {
        setSearchValue(event.target.value);
    }, []);


    function searchAudio(searchValue) {
        getAudioFileByTitle(searchValue, 30)
            .then(response => response.json())
            .then(data => {
                setAudioFiles(data);
            })
            .catch(error => {
            });
    }

    //#f2d9b1

    return (
        <>
            <PageTitle title="Search | Fraudify" />
            <div className="search">
                <div className={"container"}>
                    <div className={"filter-container"}>
                        <div className={"filter active"}>
                            <p>Tout</p>
                        </div>

                        <div className={"filter"}>
                            <p>Titres</p>
                        </div>

                        <div className={"filter"}>
                            <p>Playlists</p>
                        </div>
                    </div>

                    <div className={"result-container"}>

                        <div className={"result-section"}>

                            <div className={"section-name"}>
                                <span className={"name"}>Titres</span>
                            </div>

                            <div className={"item-container"}>
                                {audioFiles?.map((audioFile, index) => {
                                    return (
                                        <AudioCard
                                            key={index}
                                            audio={audioFile}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Browse;