export const getYear = (date) => {
    return date.slice(0, 4);
}

export const getPosterW300 = (poster_path) => {
    return ("https://image.tmdb.org/t/p/w300" + poster_path);
}
export const getPosterW400 = (poster_path) => {
    return ("https://image.tmdb.org/t/p/w400" + poster_path);
}

export const getMovieDuration= (runtime) =>{
    const hours = Math.trunc(runtime/60);
    const minutes = runtime%60;

    return (hours + "h " + minutes + "m")
}