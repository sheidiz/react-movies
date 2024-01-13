import { NavLink } from "react-router-dom";
import { getPosterW300, getYear } from "../../utils/dataTransform";

function MovieCard({ movie }) {
    const { id, title, poster_path, release_date } = movie;
    const poster = getPosterW300(poster_path);
    const year = getYear(release_date);

    return (
        <NavLink to={`/detail/${id}`}>
            <img
                className="rounded-md"
                src={poster}
                alt={title} />
            <p className="pt-2 text-white font-semibold">{title} ({year})</p>
        </NavLink>
    )
}

export default MovieCard