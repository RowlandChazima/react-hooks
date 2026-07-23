import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-2xl font-bold text-red-500 hover:text-red-500 transition-colors"
        >
          Rowland's Movie App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
