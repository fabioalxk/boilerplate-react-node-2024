import { User } from './user';

declare global {
  namespace Express {
    // Estenda a interface User do Passport
    interface User extends User {}

    // Estenda a interface Request do Express
    interface Request {
      user?: User;
      isAuthenticated(): boolean;
      logout(done: (err: any) => void): void;
    }
  }
}

// Tipo para requisições autenticadas
export interface AuthenticatedRequest extends Express.Request {
  user: User;
} 