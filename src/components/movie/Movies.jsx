import { useEffect, useState } from 'react'
import { getMoviesBySearch, getPopularMovies } from '../../utils/api';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../loader/Loader';

function Movies({ search }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {

            try {
                const movies = (search ? await getMoviesBySearch(search) : await getPopularMovies(page));
                if (page == 1) {
                    setData(movies.results)
                } else {
                    setData((prevMovies) => prevMovies.concat(movies.results || []));
                }
                setHasMore(page < movies.total_pages);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching movies");
            }
        };
        getData();
    }, [search, page])

    if (loading) { <Loader /> }
    return (
        <InfiniteScroll
            dataLength={data.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Loader />}
        >
            <div className="container-fluid">
                {data.length &&
                    <div className="p-3 grid gap-y-5 gap-x-16 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {data.map((movie) => {
                            return (
                                movie.release_date && <MovieCard key={movie.id} movie={movie} />
                            )
                        })}
                    </div>
                }
            </div>
        </InfiniteScroll>
    )
}
export default Movies