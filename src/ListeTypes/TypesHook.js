import { useEffect, useState } from "react";
import { fetchPokemonTypes } from "../Common/Repo";

const useGetPokemonTypes = () => {
  const [pokemonTypes, setPokemonTypes] = useState(null);

  useEffect(() => {
    fetchPokemonTypes().then((data) => setPokemonTypes(data));
  }, []);

  return { pokemonTypes };
};

export default useGetPokemonTypes;