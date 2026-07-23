import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/data";

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return (
      <div className="max-w-7xl text-center mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">Movie Not Found</h1>
        <p className="text-gray-300">
          The movie you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Movies
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Movie Poster */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img src={movie.image} alt={movie.title} className="w-full h-auto" />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full">
              {" "}
              ⭐ {movie.rating}
            </span>
            <span className="text-gray-400">{movie.year}</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full">
              {movie.genre}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
          <p className="text-gray-300  text-lg leading-relaxed mb-6">
            {movie.description}
          </p>

          {/* Trailers */}
          <div>
            <h2 className="text-xl font-bold mb-4">Watch Trailer</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={movie.trailer}
                title={`${movie.title} Trailer`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
