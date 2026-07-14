import { useState } from 'react';
import Filter from "./components/Filter.jsx";
import AddMovie from "./components/AddMovie.jsx";
import MovieList from "./components/MovieList.jsx";
import moviesData from "./data.js";

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
      (movie) =>
          movie.title
              .toLowerCase()
              .includes(titleFilter.toLowerCase()) &&
          movie.rating >= ratingFilter
  );

  return (
      // Outer Container: Locks the body into our deep obsidian wireframe theme
      <div className="min-h-screen bg-[#0e0e11] text-white py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#5d5fef]/30 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* APP HEADER */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white to-[#5d5fef] bg-clip-text text-transparent mb-3">
              Rowland's Movie App
            </h1>

          </header>


          <main className="space-y-10">

            {/*  Filter  */}
            <section className="max-w-4xl mx-auto w-full">
              <Filter
                  titleFilter={titleFilter}
                  setTitleFilter={setTitleFilter}
                  ratingFilter={ratingFilter}
                  setRatingFilter={setRatingFilter}
              />
            </section>

            {/*  Add Movie Form */}
            <section className="max-w-4xl mx-auto w-full">
              <AddMovie addMovie={addMovie} />
            </section>

            {/*Just a litle bit of separation*/}
            <hr className="border-[#2a2a2e] max-w-4xl mx-auto my-12" />

            {/*  Movie Grid  */}
            <section className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8 px-2">
                <h2 className="text-2xl font-bold tracking-wide">
                  All Movies
                </h2>
                <span className="text-sm text-[#a1a1a5] bg-[#1a1a1d] px-4 py-1.5 rounded-full border border-[#2a2a2e]">
                Showing {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''}
              </span>
              </div>

              {/* If no movies match our search queries */}
              {filteredMovies.length === 0 ? (
                  <div className="text-center py-20 bg-[#1a1a1d]/40 rounded-3xl border border-dashed border-[#2a2a2e]">
                    <p className="text-[#71717a] text-lg">No movies found matching your criteria.</p>
                  </div>
              ) : (
                  <MovieList movies={filteredMovies} />
              )}
            </section>

          </main>
        </div>
      </div>
  );
}

export default App;