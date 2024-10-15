import PageTitle from "../component/title/PageTitle"
import InputText from "../component/input/InputText"
import {Search} from "lucide-react"
import {useCallback, useEffect, useRef, useState} from "react"
import "./Browse.css"
import {getAudioFileByTitle} from "../service/AudioService"
import AudioCard from "../component/card/AudioCard"

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
            <PageTitle title="Browse | Fraudify" />
            <div className="browse">
                <div className="search-input">
                    <InputText
                        entryLabel="Search"
                        entryType="text"
                        reference={searchRef}
                        icon={<Search size={20} />}
                        inputHandler={handleInputChange}
                        value={searchValue}  // Liez la valeur de l'input à l'état
                    />
                </div>



               <div className={"search-result-container"}>
                   <div className={"search-title"}>Search result</div>
                   <div className={"card-container"}>
                       {audioFiles && audioFiles.length > 0 ? (
                           audioFiles.map((audio, index) => (
                               <AudioCard key={index} audio={audio} />
                           ))
                       ) : (
                           <div className={"no-result"}>No result found</div>
                       )}
                   </div>

                </div>


            </div>
        </>
    );
}
export default Browse;