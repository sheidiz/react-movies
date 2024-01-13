import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie, getPopularMovies } from "../../utils/api";
import { getMovieDuration, getPosterW400, getYear } from "../../utils/dataTransform";

function PeliculaDetalles() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedMovie = await getMovie(movieId);
                setMovie(fetchedMovie)
            } catch (error) {
                console.error("Error fetching movies")
            }
        };
        getData();

    }, [movieId]);

    if (!movie) return null;

    const { id, original_title, poster_path, release_date, overview, tagline, genres, runtime } = movie;
    const poster = getPosterW400(poster_path);
    const year = getYear(release_date)
    const duration = getMovieDuration(runtime)

    return (
        <div className="container-fluid p-6 lg:px-15 m-auto md:w-4/5 lg:w-2/3">
            {movie &&
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center ">
                    <img src={poster} alt={original_title} className="lg:mx-2 rounded-lg" />
                    <div className="text-white flex flex-col gap-2" >
                        <h1 className="font-bold text-4xl">
                            {original_title} ({year})
                        </h1>
                        <p className="text-md italic">
                            {tagline}
                        </p>
                        <div className="text-md flex flex-row gap-2">
                            <p>{release_date} • </p>
                            <p>{duration}</p>
                        </div>
                        <div>
                            <ul className="inline-flex gap-2">

                                {genres.map((genre) => {
                                    return (
                                        <li key={genre.id}
                                            className="inline rounded-lg px-2 border-solid border-2 border-indigo-500/50">
                                            {genre.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <p className="text-lg">Overview:</p>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default PeliculaDetalles