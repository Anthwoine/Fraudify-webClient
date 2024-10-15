import image from '../../../asset/undraw/error404.svg';
import PageTitle from "../../../component/title/PageTitle";
import './error404.scss';

function Error404() {
    return (
        <>
            <PageTitle title="Error 404 | Fraudify" className={"page-title"}/>
            <div className={"error404"}>
                <img src={ image } alt={ "" }/>
            </div>
        </>

    );
}

export default Error404;