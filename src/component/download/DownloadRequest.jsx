import audio from '../../asset/undraw/audio.svg';
import './downloadRequest.scss';
function DownloadRequest() {
    return(
        <div className={"download-request"}>
            <img src={audio} alt="audio" />
        </div>
    )
}

export default DownloadRequest;