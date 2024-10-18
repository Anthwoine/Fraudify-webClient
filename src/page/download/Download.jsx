import PageTitle from "../../component/title/PageTitle";
import DownloadForm from "../../component/form/download/DownloadForm";
import './download.scss'

function Download() {
    return(
        <>
            <PageTitle title="Download | Fraudify" />
            <div className={"download"}>
                <DownloadForm />
            </div>
        </>

    );
}

export default Download;