import express from "express";
import userRoutes from "./routes/userRoutes.js";
import sequelize from "./config/database.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Database synchronized with Sequelize models.");
//   })
//   .catch((error) => {
//     console.error("Database synchronization error:", error);
//   });

export default app;
