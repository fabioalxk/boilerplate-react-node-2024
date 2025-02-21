import express from 'express';
import { getUsers, getUser, createUser, deleteUser } from '../controllers/userController/index.js';
import passport from 'passport';

const router = express.Router();

// Rotas de autenticação
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirecionamento bem-sucedido
    res.redirect('/profile');
  }
);

// Rotas existentes
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

// Adicionar esta rota após as rotas de autenticação
router.get('/profile', (req, res) => {
  if (!req.user) return res.redirect('/login');
  res.json(req.user);
});

export default router;
