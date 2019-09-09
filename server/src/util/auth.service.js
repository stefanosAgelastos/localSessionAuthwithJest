import passport from 'passport';
import LocalStrategy from './auth.strategy';
import User from '../models/auth.User';

passport.serializeUser((user, done) => {
    console.log("Serializing user");
    done(null, { _id: user._id})
})

passport.deserializeUser((id, done) => {
    console.log("DeSerializing user");
    User.findOne(
        {_id: id},
        'username',
        (err, user) => {
            done(null, user)
        }
    )
})

// Use Strategy
passport.use(LocalStrategy);

export default passport;