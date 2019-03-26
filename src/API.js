import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokemon'

export default {
  getAllPokemon: (id = '') =>
    axios.get(`${url}/`, {
      params: {
        id,
      },
    }),
    
  findPokemon: (text = '') => 
    axios.get(`${url}/${text}`),

  getMoveDetail: (moveUrl = '') =>
    axios.get(`${moveUrl}`)
}
