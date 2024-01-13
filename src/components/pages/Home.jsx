import { useEffect, useState } from 'react';
import TarjetaPelicula from '../Pelicula/TarjetaPelicula';
import { getPopularMovies } from '../../utils/api';

function Home() {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const moviesFetched = await getPopularMovies();
                console.log(moviesFetched)
                setMovies(moviesFetched);
            } catch (error) {
                console.error("Error fetching movies")
            }
        };
        getData();

    }, [])

    return (
        <div className="bg-[#1f2937] container-fluid">
            <div className="p-3 grid gap-10 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {movies && movies.results.map((pelicula) => {
                    return (
                        <div key={pelicula.id}>
                            <TarjetaPelicula pelicula={pelicula} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home