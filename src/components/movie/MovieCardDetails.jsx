import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../../utils/api";
import { getMovieDuration, getPosterW400, getYear } from "../../utils/dataTransform";

function MovieCardDetails() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedMovie = await getMovie(movieId);
                setMovie(fetchedMovie)
            } catch (error) {
                console.error("Error fetching movies");
                setErrorMessage("Movie not found :(")
            }
        };
        getData();

    }, [movieId]);

    if (!movie) return (
        <p className="text-white text-lg text-center py-10">{errorMessage}</p>
    );

    const { original_title, poster_path, release_date, overview, tagline, genres, runtime } = movie;
    const poster = getPosterW400(poster_path);
    const year = getYear(release_date)
    const duration = getMovieDuration(runtime)

    return (
        <div className="container-fluid p-6 lg:px-15 m-auto md:w-4/5 lg:w-2/3">
            {year && movie &&
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center ">
                    <img src={poster} alt={original_title} className="lg:mx-2 rounded-lg" />
                    <div className="text-white flex flex-col gap-2 lg:gap-4" >
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
                </div>
            }
            <div className="mt-3 flex justify-center">
                <button className="bg-white text-[#1f2937] font-bold rounded-md border-white border p-1 "
                    onClick={() => navigate(-1)}>
                    Go back
                </button>
            </div>
        </div>
    )
}

export default MovieCardDetails