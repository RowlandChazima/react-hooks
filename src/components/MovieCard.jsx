
const MovieCard = ({ movie }) => {
    return (
        <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl p-6 bg-gradient-to-br from-[#1a1a1d] to-[#121214] border border-[#2a2a2e]">

            <img
                className="w-full h-auto aspect-[2/3] object-cover rounded-2xl"
                src={movie.posterURL}
                alt={movie.title}
            />

            <div className="pt-6 px-1">
                <h1 className="text-3xl font-sans font-medium tracking-tight text-white mb-2">
                    {movie.title}
                </h1>

                <div className="flex items-center justify-between gap-4 mb-5">

                    <p className="flex-1 text-base leading-relaxed text-[#a1a1a5]">
                        {movie.description}
                    </p>

                    <div className="text-right flex-none">
                        <span className="block text-xs uppercase tracking-widest text-[#a1a1a5]">Rating:</span>
                        <span className="block text-4xl font-extrabold text-white">{movie.rating}</span>
                    </div>
                </div>

                <button
                    className="w-full text-center rounded-xl bg-[#5d5fef] hover:bg-[#4a4cd6] transition duration-200 py-4 px-6 text-white text-lg font-semibold"
                    aria-label={`View details for ${movie.title}`}
                >
                    Details
                </button>
            </div>
        </div>
    );
};

export default MovieCard;