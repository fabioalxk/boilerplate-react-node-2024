import { Router } from "express";
import { getAllPokemon } from "../controllers/pokemonController";

const router = Router();

router.get("/", getAllPokemon);

export default router;