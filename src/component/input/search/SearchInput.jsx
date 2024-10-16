import './searchInput.scss';
import { Search } from 'lucide-react';
function SearchInput() {
    return (
        <div className={"search-input"}>
            <input
                className={"search-entry"}
                placeholder={"Search"}
                type={"text"}
            />
            <div className={"entry-icon"}>
                <Search />
            </div>
        </div>
    )
}

export default SearchInput;