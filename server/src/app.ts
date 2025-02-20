import express from 'express';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';
import cors from 'cors';
import session from 'express-session'; // Adicione esta importação
import passport from './config/passportConfig'; // Adicione esta importação
import dotenv from 'dotenv'; // Adicione esta importação

dotenv.config();

const app = express();

// Middlewares globais
app.use(express.json());
app.use(cors());

// Configurar sessões para o Passport
app.use(session({
  secret: process.env.SESSION_SECRET!, // Use um segredo seguro (de .env)
  resave: false,
  saveUninitialized: false
}));

// Inicializar o Passport
app.use(passport.initialize());
app.use(passport.session());

// Montar as rotas de usuário (incluindo autenticação)
app.use('/api/users', userRoutes);

// Sincronizar o banco de dados com Sequelize
sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized with Sequelize models.');
  })
  .catch((error) => {
    console.error('Database synchronization error:', error);
  });

export default app;