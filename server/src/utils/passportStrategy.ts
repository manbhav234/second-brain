import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import errorHandler from './ErrorHandler'

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user: Express.User, done) => {
    done(null, user)
})


const strategy = new GoogleStrategy({
    //FIXME - check environment variable availability at the start of the application
    clientID: process.env.CLIENT_ID ?? errorHandler("Missing CLIENT_ID environment variable"),
    clientSecret: process.env.CLIENT_SECRET ?? errorHandler("Missing CLIENT_SECRET enviroment variable"),
    callbackURL: process.env.REDIRECT_URI
}, async (accessToken, refreshToken, profile, details, done) => {
    try{
        console.log(details);
        done(null, {id: details._json.sub, name: details._json.name, email: details._json.email})
    }catch(err){
        console.log(err)
    }
})

passport.use(strategy)
