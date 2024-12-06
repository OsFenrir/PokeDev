import Header from "../Common/Header";
import Footer from "../Common/Footer";
import useGetRandomPokemon from "./RandomHook";
import React, { useState } from "react";

const RandomPokemonPage = () => {
  const [refreshKey, setRefreshKey] = useState(0); // Clé pour rafraîchir

  // Appelle le hook pour récupérer un Pokémon aléatoire
  const { randomPokemon } = useGetRandomPokemon(refreshKey);

  return (
    <>
    <Header/>
    <section className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Pokémon Aléatoire</h1>
      {randomPokemon ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={randomPokemon.image}
            alt={randomPokemon.name}
            className="w-32 h-32 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">{randomPokemon.name}</h2>
          <p className="text-gray-600">
            Types : {randomPokemon.apiTypes.map((type) => type.name).join(", ")}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Chargement...</p>
      )}
      <button
        onClick={() => setRefreshKey((prevKey) => prevKey + 1)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Rafraîchir le Pokémon
      </button>
    </section>
    <Footer/>
    </>
  );
};

export default RandomPokemonPage;
