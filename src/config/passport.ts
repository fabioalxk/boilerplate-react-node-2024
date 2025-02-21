import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../types/user';

declare global {
  namespace Express {
    interface User extends User {}
  }
}

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Aqui você implementaria a lógica para encontrar ou criar um usuário
      // Este é apenas um exemplo
      const user: User = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails?.[0].value || '',
        googleId: profile.id
      };
      
      return done(null, user);
    } catch (error) {
      return done(error as Error);
    }
  }
));

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    // Aqui você implementaria a lógica para buscar o usuário pelo ID
    // Este é apenas um exemplo
    const user: User = {
      id,
      displayName: '',
      email: '',
      googleId: ''
    };
    done(null, user);
  } catch (error) {
    done(error as Error);
  }
});

export default passport; 