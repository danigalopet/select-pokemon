
const pokemonSelect = document.getElementById('pokemon-select');
  const getPokemonButton = document.getElementById('get-pokemon');
  const container = document.querySelector('.container');

  getPokemonButton.addEventListener('click', () => {
    const seleccionPokemon = pokemonSelect.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${seleccionPokemon}`)
      .then(response => response.json())
      .then(data => displayPokemonInfo(data))
      .catch(error => console.error('Error fetching data:', error));
  });

  function displayPokemonInfo(pokemon) {
   
    const pokeInfo = document.getElementById('pokemon-info');
    if (pokeInfo) {
      pokeInfo.remove();
    }

    const pokemonInfo = document.createElement('div');
    pokemonInfo.id = 'pokemon-info';
    pokemonInfo.classList.add('pokemon-card');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const pokemonType = document.createElement('p');
    pokemonType.textContent = `Tipo: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;

    const pokemonHeight = document.createElement('p');
    pokemonHeight.textContent = `Altura: ${pokemon.height / 10} m`;

    const pokemonWeight = document.createElement('p');
    pokemonWeight.textContent = `Peso: ${pokemon.weight / 10} kg`;

    pokemonInfo.appendChild(pokemonImage);
    pokemonInfo.appendChild(pokemonName);
    pokemonInfo.appendChild(pokemonType);
    pokemonInfo.appendChild(pokemonHeight);
    pokemonInfo.appendChild(pokemonWeight);

    container.appendChild(pokemonInfo);
  }