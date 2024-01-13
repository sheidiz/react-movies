import Movies from "../movie/Movies"
import Search from "../search/search";
import {  useSearchParams } from "react-router-dom";

function Home() {

    const [queryParameters] = useSearchParams();
    const search = queryParameters.get("search")

    return (
        <div className="py-5">
            <Search />
            <Movies search={search} />
        </div>
    )
}

export default Home