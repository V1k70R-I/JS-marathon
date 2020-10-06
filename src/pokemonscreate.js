import Pokemon from './pokemon.js'

export const player1 = new Pokemon({
  name: 'Pikachu',
  type: 'electric',
  hp: 100,
  selectors: 'character',
});

export const player2 = new Pokemon({
  name: 'Charmander',
  hp: 100,
  type: 'fire',
  selectors: 'enemy'
})
