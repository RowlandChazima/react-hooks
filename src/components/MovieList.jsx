import MovieCard from "./MovieCard.jsx";

const MovieList = ({movies}) => {
    return (
        <div>
            {movies.map((movie)=>(

            <MovieCard
            key={movie.id}
            movie={movie}

            />
            ))}
        </div>
    )
}
export default MovieList
