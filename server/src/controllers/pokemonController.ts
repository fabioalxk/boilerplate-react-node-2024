import { Request, Response } from "express";
import { PokemonService } from "../services/pokemonService";

const pokemonService = new PokemonService();

export async function getAllPokemon(req: Request, res: Response) {
  try {
    const data = await pokemonService.getAllPokemon();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
