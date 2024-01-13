import { useState } from "react";
import { TbSearch,  } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Search() {

    const history = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        history("/?search=" + searchTerm)
    }

    return (
        <div className="pb-3 flex flex-row justify-center items-center">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="rounded-lg p-2"
                    type="text"
                    id="movieSearch"
                    placeholder="search a movie.."
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="px-2 " type="submit"><TbSearch className="text-white h-5" /></button>
            </form>
        </div>
    )
}

export default Search