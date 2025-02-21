import express from "express";
import userRoutes from "./routes/userRoutes.js";
import sequelize from "./config/database.js";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

// Load environment variables first
dotenv.config();

console.log("GOOGLE_CLIENT_ID", process.env.GOOGLE_CLIENT_ID);

const app = express();

// Configuração de sessão
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
  })
);

// Inicializar Passport e sessões
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/auth", userRoutes); // Adicionar rotas de autenticação

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
