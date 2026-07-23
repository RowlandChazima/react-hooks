import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-black text-sm font-bold px-2 py-1 rounded">
          ⭐{movie.rating}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{movie.title}</h3>
        <div className="flex items-center justify-between mt-2 text-gray-400 text-sm">
          <span>{movie.year}</span>
          <span className="bg-gray-700 px-2 py-0.5 rounded">{movie.genre}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
