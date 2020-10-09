import Pokemon from './pokemon.js'
import {pokemons} from './pokemons.js'

const pikachu = pokemons.find(item => item.name === 'Pikachu');

export const player1 = new Pokemon({
  ...pikachu,
  selectors: 'character',
});

const charmander = pokemons.find(item => item.name === 'Charmander');

export const player2 = new Pokemon({
  ...charmander,
  selectors: 'enemy',
})
