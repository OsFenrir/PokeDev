export const fetchPokeByGen = async (generationId) => {
  const url = `https://pokebuildapi.fr/api/v1/pokemon/generation/${generationId}`;
  const response = await fetch(url);

  const data = await response.json();
  return data; 
};

export const fetchPokemonTypes = async () => {
  const url = `https://pokebuildapi.fr/api/v1/types`; 
  const response = await fetch(url);
  const data = await response.json();
  return data; 
};



export const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // Génère un ID aléatoire
  const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${randomId}`); // Utilisation de backticks pour inclure randomId
  const data = await response.json();
  return data; // Retourne directement les données du Pokémon
};


