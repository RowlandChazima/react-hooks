
const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-4xl mx-auto">

            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Search movie title..."
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                    className="w-full px-5 py-4 bg-[#1a1a1d] text-white placeholder-[#71717a] border border-[#2a2a2e] rounded-2xl outline-none focus:border-[#5d5fef] focus:ring-2 focus:ring-[#5d5fef]/20 transition-all duration-200"
                />
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#71717a]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="relative w-full sm:w-56">
                <select
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(Number(e.target.value))}
                    className="w-full px-5 py-4 bg-[#1a1a1d] text-white border border-[#2a2a2e] rounded-2xl outline-none focus:border-[#5d5fef] focus:ring-2 focus:ring-[#5d5fef]/20 transition-all duration-200 appearance-none cursor-pointer"
                >
                    <option value={0} className="bg-[#121214] text-white">All Ratings</option>
                    <option value={1} className="bg-[#121214] text-white">1+ Stars</option>
                    <option value={2} className="bg-[#121214] text-white">2+ Stars</option>
                    <option value={3} className="bg-[#121214] text-white">3+ Stars</option>
                    <option value={4} className="bg-[#121214] text-white">4+ Stars</option>
                    <option value={5} className="bg-[#121214] text-white">5 Stars</option>
                </select>

                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#a1a1a5]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

        </div>
    );
};

export default Filter;