const api = "https://api.themoviedb.org/3";
const apiAutorization = import.meta.env.VITE_API_KEY;

export async function getData(path) {
    const res = await fetch(api + path, {
        headers: {
            accept: 'application/json',
            Authorization: apiAutorization
        }
    });

    if (!res.ok) throw new Error("Failed API connection");

    return res.json();
}

export const getPopularMovies = async () => {
    const movies = await getData("/movie/popular?language=en-US&page=1");

    if (!movies) return [];

    return movies;
}

export const getMovie = async (id) => {
    const movie = await getData("/movie/" + id);
    if(!movie) return null;

    return movie
}
