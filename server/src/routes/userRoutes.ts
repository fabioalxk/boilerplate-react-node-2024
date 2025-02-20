import { Router, Request } from "express";
import passport from '../config/passportConfig';

import { createUser } from "../controllers/userController/createUser";
import { deleteUser } from "../controllers/userController/deleteUser";
import { getUser } from "../controllers/userController/getUser";
import { getUsers } from "../controllers/userController/getUsers";

declare global {
  namespace Express {
    interface Request {
      isAuthenticated: () => boolean;
      user?: any;
    }
  }
}

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);


router.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
router.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/' }),
(req, res) => {
    res.redirect('http://localhost:3000/home');
}
);

router.get('/user', (req, res) => {
if (req.isAuthenticated && req.isAuthenticated()) {
    res.json(req.user);
} else {
    res.status(401).json({ message: 'Não autorizado' });
}
});
  

export default router;
