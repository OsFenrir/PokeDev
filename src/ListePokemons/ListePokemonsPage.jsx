import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import useGetPokeByGen from "./Hook";

const ShowPokemonByGenerationPage = () => {
  const [currentGen, setCurrentGen] = React.useState(1); // Par défaut, Génération 1
  const { pokeByGen, isLoading } = useGetPokeByGen(currentGen);

  const generations = [1, 2, 3, 4, 5, 6, 7, 8]; // Liste des générations

  return (
    <>
      <Header />
      <section className="p-6 bg-gradient-to-b from-yellow-300 via-red-400 to-blue-500 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg mb-8">
          Pokémon - Génération {currentGen}
        </h1>

        {/* Boutons pour changer de génération */}
        <div className="flex justify-center space-x-4 mb-8">
          {generations.map((gen) => (
            <button
              key={gen}
              onClick={() => setCurrentGen(gen)}
              className={`px-6 py-2 rounded-full font-bold transition-transform duration-300 ${
                currentGen === gen
                  ? "bg-blue-600 text-white shadow-lg scale-110"
                  : "bg-yellow-400 text-gray-800 hover:scale-105"
              }`}
            >
              Génération {gen}
            </button>
          ))}
        </div>

        {/* Liste des Pokémon */}
        {isLoading ? (
          <p className="text-center text-white text-xl font-bold">
            Chargement des Pokémon...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pokeByGen.map((pokemon) => (
              <div
                key={pokemon.id}
                className="bg-white border-4 border-red-500 rounded-lg shadow-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
                  {pokemon.name}
                </h2>

                {/* Logos des types */}
                <div className="flex justify-center space-x-4 mb-4">
                  {pokemon.apiTypes.map((type) => (
                    <img
                      key={type.name}
                      src={type.image}
                      alt={type.name}
                      className="w-12 h-12"
                    />
                  ))}
                </div>

                {/* Statistiques */}
                <p className="text-center font-semibold text-gray-700">
                  <span className="text-blue-600">HP</span>: {pokemon.stats.HP},{" "}
                  <span className="text-red-600">Atk</span>:{" "}
                  {pokemon.stats.attack},{" "}
                  <span className="text-green-600">Def</span>:{" "}
                  {pokemon.stats.defense},{" "}
                  <span className="text-yellow-600">Spd</span>:{" "}
                  {pokemon.stats.speed}
                </p>

                {/* Poids et Taille */}
                <p className="text-center text-gray-700 mt-4">
                  <span className="font-bold">Poids :</span>{" "}
                  {pokemon.weight}kg, <span className="font-bold">Taille :</span>{" "}
                  {pokemon.height}m
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ShowPokemonByGenerationPage;
