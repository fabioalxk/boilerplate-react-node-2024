import { Router } from 'express';
import { Request, Response } from 'express';
import passport from 'passport';

const router = Router();

// Rota para iniciar o processo de autenticação do Google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback do Google após autenticação
router.get('/auth/google/callback',
  passport.authenticate('google', { 
    failureRedirect: '/login',
    successRedirect: '/'
  })
);

// Rota protegida que requer autenticação
router.get('/profile', (req: Request, res: Response) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Não autorizado' });
  }
  res.json(req.user);
});

// Rota de logout
router.get('/logout', (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao fazer logout' });
    }
    res.redirect('/');
  });
});

export default router; 