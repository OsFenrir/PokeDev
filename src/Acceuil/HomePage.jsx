import { useEffect, useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
const PokemonsTeam = () => {
  const [pokemonsInTeam, setPokemonsInTeam] = useState([]);

  const fetchPokemonsTeam = () => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonsInTeam(data);
      });
  };

  // useEffect permet d'exécuter du code à certains moments du cycle de vie du composant
  useEffect(() => {
    fetchPokemonsTeam();
  }, []);

  const handleRecreateTeam = () => {
    fetchPokemonsTeam();
  };

  return (
    <>
    <Header />
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center mb-6">
      </div>

      {pokemonsInTeam.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pokemonsInTeam.map((pokemon) => {
            return (
              <article
                key={pokemon.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-32 h-32 mb-4"
                />
                <p className="text-lg font-semibold text-gray-800">
                  {pokemon.name}
                </p>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          Team en cours d'assemblage !
        </p>
      )}
      <Footer/> 
    </section>
    </>
  );
};

export default PokemonsTeam;
