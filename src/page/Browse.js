import PageTitle from "../component/title/PageTitle";
import InputText from "../component/input/InputText";
import {
    Search
} from "lucide-react"
import {useRef} from "react";
import "./Browse.css";
function Browse() {
    const searchRef = useRef();


    return (
        <>
            <PageTitle title="Browse | Fraudify" />
            <div className={"browse"}>
                <div className={"search-input"}>
                    <InputText entryLabel={"Search"} entryType={"text"} reference={searchRef} icon={<Search size={20}/>}/>
                </div>
            </div>
        </>
    );
}

export default Browse;