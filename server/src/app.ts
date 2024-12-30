import express from "express";
import pokemonRoutes from "./routes/pokemonRoutes";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/pokemon", pokemonRoutes);

export default app;
