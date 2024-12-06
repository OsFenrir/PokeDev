import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Acceuil/HomePage'
import  "./Common/index.css";
import ShowPokemonByGenerationPage from './ListePokemons/ListePokemonsPage';
import RandomPokemonPage from './RandomPokemon/RandomPokemonPage';
import PokemonTypesPage from './ListeTypes/PokemonTypesPage';


function App() {
  return (
    
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Pokemons/:id" element={<ShowPokemonByGenerationPage />} />
      <Route path="/PokemonSurprise/:id" element={<RandomPokemonPage />} />
      <Route path="/PokemonTypes/" element={<PokemonTypesPage />} />



      </Routes>
      
    </BrowserRouter>
  );
}

export default App;