const callbackURL = process.env.NODE_ENV === 'production' 
  ? 'https://yourdomain.com/auth/google/callback' 
  : 'http://localhost:3000/auth/google/callback';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: callbackURL
  },
  // ... restante do código permanece igual
)); 