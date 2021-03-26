export const getCharacters = async () => {
  const response = await window.fetch(
    "https://rickandmortyapi.com/api/character/"
  );

  if (!response.ok) {
    throw new Error("Ups!, we have a problem with the server, try later");
  } else {
    return response.json();
  }
};
