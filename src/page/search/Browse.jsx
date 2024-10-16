import PageTitle from "../../component/title/PageTitle"
import InputText from "../../component/input/InputText"
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
            <PageTitle title="Browse | Fraudify" />
            <div className="browse">
            </div>
        </>
    );
}
export default Browse;