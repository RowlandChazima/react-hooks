import { useState } from "react";

const AddMovie = ({ addMovie }) => {
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Quick validation to prevent empty submissions
        if (!movie.title || !movie.description || !movie.posterURL || !movie.rating) {
            alert("Please fill in all fields!");
            return;
        }

        // FIXED: Calling the passed-down prop `addMovie` instead of `AddMovie` (the component)
        addMovie({
            ...movie,
            id: Date.now(),
            rating: Number(movie.rating),
        });

        // Reset form
        setMovie({
            title: "",
            description: "",
            posterURL: "",
            rating: "",
        });
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-[#1a1a1d] to-[#121214] border border-[#2a2a2e] rounded-3xl p-8 shadow-2xl mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">
                Add New Movie
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">

                {/* Title Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-[#a1a1a5] font-semibold">Title</label>
                    <input
                        name="title"
                        placeholder="e.g. Houses & Dragons"
                        value={movie.title}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-[#121214]/50 text-white placeholder-[#71717a] border border-[#2a2a2e] rounded-2xl outline-none focus:border-[#5d5fef] focus:ring-2 focus:ring-[#5d5fef]/20 transition-all duration-200"
                    />
                </div>

                {/* Description Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-[#a1a1a5] font-semibold">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter movie summary..."
                        value={movie.description}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-5 py-3.5 bg-[#121214]/50 text-white placeholder-[#71717a] border border-[#2a2a2e] rounded-2xl outline-none focus:border-[#5d5fef] focus:ring-2 focus:ring-[#5d5fef]/20 transition-all duration-200 resize-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* Poster URL */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs uppercase tracking-widest text-[#a1a1a5] font-semibold">Poster Image URL</label>
                        <input
                            name="posterURL"
                            placeholder="https://example.com/image.jpg"
                            value={movie.posterURL}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 bg-[#121214]/50 text-white placeholder-[#71717a] border border-[#2a2a2e] rounded-2xl outline-none focus:border-[#5d5fef] focus:ring-2 focus:ring-[#5d5fef]/20 transition-all duration-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-[#a1a1a5] font-semibold">Rating (1-5)</label>
                        <input
                            name="rating"
                            placeholder="5"
                            min="1"
                            type="number"
                            max="5"
                            value={movie.rating}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 bg-[#121214]/50 text-white placeholder-[#71717a] border border-[#2a2a2e] rounded-2xl outline-none focus:border-[#5d5fef] focus:ring-2 focus:ring-[#5d5fef]/20 transition-all duration-200"
                        />
                    </div>

                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full mt-4 text-center rounded-2xl bg-[#5d5fef] hover:bg-[#4a4cd6] transition duration-200 py-4 px-6 text-white text-lg font-semibold shadow-lg shadow-[#5d5fef]/10"
                >
                    Add Movie
                </button>

            </form>
        </div>
    );
};

export default AddMovie;