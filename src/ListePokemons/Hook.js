import { useEffect, useState } from "react";
import { fetchPokeByGen } from "../Common/Repo";

const useGetPokeByGen = (query = null) => {
  const [pokeByGen, setPokeByGen] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokeByGen(query).then((data) => {
      setPokeByGen(data);
      setIsLoading(false);
    });
  }, [query]);

  return { pokeByGen, isLoading };
};

export default useGetPokeByGen;