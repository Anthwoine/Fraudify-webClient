import './AudioCard.css';
import {useAudio} from "../../context/AudioContext";

const photoURL = 'http://127.0.0.1:9090/images/'

const AudioCard = ({ audio }) => {

    const {currentAudioFile, setPlaylistFiles} = useAudio();


    //

    return (
        <div
            className={`card ${currentAudioFile?.trackId === audio.trackId ? 'active' : ''}`}
            onClick={() => setPlaylistFiles([audio])
            }>
            <div className="card-body">
                <div className={"audio-image"}>
                    <img className={"image"} src={`${photoURL}default.png`} alt="audio"/>
                </div>
                <div className={"audio-info"}>
                    <p className={"title"}>{audio.title}</p>
                    <p className={"artist"}>{audio.artist}</p>
                </div>
            </div>
        </div>
    );
}

export default AudioCard;