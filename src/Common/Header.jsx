import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value;

    navigate("/search-results?query=" + query);
  };

  return (
    
    <header className="bg-gradient-to-r from-red-500 via-white to-blue-500 py-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center px-4">
      {/* Logo avec la Pokéball */}
      <div className="flex items-center space-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Poké_Ball_icon.svg"
          alt="Pokéball"
          className="w-10 h-10"
        />
        <h1 className="text-3xl font-bold text-yellow-400 drop-shadow-md">
          PokéDev
        </h1>
      </div>

      <nav className="flex space-x-6">
        <Link
          to="/"
          className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Accueil
        </Link>
        <Link
          to="/PokemonTypes/"
          className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Types
        </Link>
        <Link
          to="/PokemonSurprise/:id"
          className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Pokémon Aléatoire
        </Link>
        <Link
          to="/Pokemons/:id"
          className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Pokémon Gens
        </Link>
      </nav>
    </div>
  </header>
  );
};

export default Header;
