import InputText from "../../input/form/InputText";
import { KeyRound, Music, SquareUser, RefreshCcw } from 'lucide-react';
import './downloadForm.scss'
import {useRef} from "react";
import {getMetadata} from "../../../service/DLPService";

function DownloadForm() {

    const urlInput = useRef(null);
    const urlIcon = useRef(null);

    const titleInput = useRef(null);
    const titleIcon = useRef(null);

    const artistInput = useRef(null);
    const artistIcon = useRef(null);

    const img = useRef(null);
    const search = useRef(null);

    const handleUrlSearch = () => {
        search.current.classList.add('rotate');
        urlInput.current.disabled = true;
        titleInput.current.disabled = true;
        artistInput.current.disabled = true;
        getMetadata(urlInput.current.value).then(response => {
            if(response.status === 200) {
                response.json().then(data => {
                    titleInput.current.value = data.metadata.title;
                    artistInput.current.value = data.metadata.channel;
                })
            } else {
                urlInput.current.classList.add('error-input');
                urlIcon.current.classList.add('error-icon');
                setTimeout(() => {
                    urlInput.current.classList.remove('error-input');
                    urlIcon.current.classList.remove('error-icon');
                }, 2000);
            }
        }).finally(() => {
            search.current.classList.remove('rotate');
            urlInput.current.disabled = false;
            titleInput.current.disabled = false;
            artistInput.current.disabled = false;
        })
    }



    return (
        <div className={"download-form"}>
            <div className="download-form-title">
                <h2>Download</h2>
            </div>
            <div className="download-form-container">
                <div className={"image-container"}>
                    <img src="http://localhost:9090/images/unnamed.png" alt={"download"} className={"image"} ref={img}/>
                </div>

                <div className="download-form-info">
                    <div className={"form-input"}>
                        <InputText placeholder={"key / url"} icon={<KeyRound className={"form-icon"} ref={urlIcon}/>}
                                   ref={urlInput}
                        />
                        <RefreshCcw
                            onClick={handleUrlSearch}
                            ref={search}
                            className={"form-search-button"}
                        />
                    </div>

                    <div className={"form-input"}>
                        <InputText placeholder={"title"} icon={<Music className={"form-icon"} ref={titleIcon}/>}
                                   ref={titleInput}
                        />
                    </div>

                    <div className={"form-input"}>
                        <InputText placeholder={"artist"} icon={<SquareUser className={"form-icon"} ref={artistIcon}/>}
                                   ref={artistInput}
                        />
                    </div>

                    <div className={"form-download"}>
                        <button
                            className={"download-button"}
                            onClick={() => {
                                getMetadata(urlInput.current.value).then(response => {
                                    response.json().then(data => {
                                        console.log(data)
                                    })
                            })}}
                        >Download</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DownloadForm;