import PageTitle from "../../component/title/PageTitle";
import DownloadForm from "../../component/form/download/DownloadForm";
import './download.scss'
import DownloadRequest from "../../component/download/DownloadRequest";

function Download() {
    return(
        <>
            <PageTitle title="Download | Fraudify" />
            <div className={"download"}>
                <div className={"download-container"}>
                    <DownloadForm/>
                </div>

            </div>
        </>

    );
}

export default Download;