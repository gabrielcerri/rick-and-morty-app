//hacer tarjeta para personajes

import React from "react";

import { getCharacters } from "../api/getCharacters";

export const Character = () => {
  const [state, setState] = React.useState({
    loading: false,
    characters: [],
    error: null,
  });

  const { characters } = state;

  React.useEffect(() => {
    const doFetchCharacters = async () => {
      setState({ loading: true, characters: [], error: null });

      try {
        const { results } = await getCharacters();
        setState({ loading: false, characters: results, error: null });
      } catch (e) {
        setState({ loading: false, characters: [], error: e.message });
      }
    };

    doFetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <h1>{character.name}</h1>
      ))}
    </div>
  );
};
