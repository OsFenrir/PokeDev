import { useEffect, useState } from "react";
import { fetchRandomPokemon } from "../Common/Repo";

const useGetRandomPokemon = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);

  useEffect(() => {
    fetchRandomPokemon().then((data) => setRandomPokemon(data));
  }, []);

  return { randomPokemon };
};

export default useGetRandomPokemon;