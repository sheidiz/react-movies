import { NavLink } from "react-router-dom";
import { getPosterW300, getYear } from "../../utils/dataTransform";

function TarjetaPelicula({ pelicula }) {
    const { id, original_title, poster_path, release_date } = pelicula;
    const poster = getPosterW300(poster_path);
    const year = getYear(release_date);

    return (
        <NavLink to={`/detail/${id}`}>
            <img
                className="rounded-md"
                src={poster}
                alt={original_title} />
            <p className="pt-2 text-white font-semibold">{original_title} ({year})</p>
        </NavLink>
    )
}

export default TarjetaPelicula