import axios from "axios";

export class PokemonService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://pokeapi.co/api/v2/pokemon";
  }

  public async getAllPokemon() {
    
    const url = `${this.baseUrl}?limit=50&offset=0`;
    const response = await axios.get(url);

    
    const results = response.data.results;
    return results;
  }
}
