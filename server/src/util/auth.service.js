import passport from 'passport';
import LocalStrategy from './localStrategy';
import User from '../models/auth.User';

passport.serializeUser((user, done) => {
    done(null, { _id: user._id})
})

passport.deserializeUser((id, done) => {
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