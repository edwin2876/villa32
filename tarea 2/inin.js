async function obtenerPokemon(id) {
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`);
      if (!respuesta.ok) {
        throw new Error("No se encontró el Pokémon");
      }
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error("Error al obtener el Pokémon:", error);
      return null;
    }
  }

  async function mostrarPokemon() {
    const input = document.getElementById("pokemonInput").value.trim();
    const contenedor = document.getElementById("pokemonInfo");
    contenedor.innerHTML = ""; // Limpiar antes de mostrar

    if (!input) {
      contenedor.innerHTML = "<p>Por favor ingresa un nombre o ID válido.</p>";
      return;
    }

    const pokemon = await obtenerPokemon(input);

    if (pokemon) {
      const tipos = pokemon.types.map(t => t.type.name).join(", ");
      contenedor.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Altura:</strong> ${pokemon.height}</p>
        <p><strong>Peso:</strong> ${pokemon.weight}</p>
        <p><strong>Tipos:</strong> ${tipos}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      `;
    } else {
      contenedor.innerHTML = "<p>No se pudo obtener la información del Pokémon.</p>";
    }
  }