import React from "react";
import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <main>
      <div className="bg-gradient-to-r from-red-900 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl  md:text-6xl font-bold text-white mb-4">
            Discover my collection of favorite movies
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Browse my collection of favorite movies and greatest films ever
            made. Click on any movie to watch the trailer and learn more
          </p>
        </div>
      </div>
      <MovieList />
    </main>
  );
};

export default HomePage;
