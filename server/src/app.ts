import express from 'express'
import passport from 'passport';
import './utils/passportStrategy'
import authRouter from "./routes/auth";
import cookieSession from 'cookie-session'
import authenticate from './middlewares/authenticate';
const app = express();
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [`${process.env.SESSION_COOKIE_KEY}`]
}))

app.use(passport.initialize());
app.use(passport.session())

app.use('/api/v1/auth', authRouter);

export default app;