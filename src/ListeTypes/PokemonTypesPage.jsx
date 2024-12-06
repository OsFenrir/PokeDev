import React from "react";
import useGetPokemonTypes from "./TypesHook";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const PokemonTypesPage = () => {
  const { pokemonTypes } = useGetPokemonTypes();

  // Gestion du chargement et des données
  if (!pokemonTypes) {
    return (
      <section className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
        <p className="text-xl font-bold text-gray-700">Chargement des types...</p>
      </section>
    );
  }

  return (
    <>
    <Header/>
   
    <section className="p-6 bg-gradient-to-b from-yellow-300 via-red-400 to-blue-500 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Tous les Types :
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonTypes.map((type) => (
          <div
            key={type.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={type.image}
              alt={type.name}
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800">{type.name}</h2>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default PokemonTypesPage;
