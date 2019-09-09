import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "./util/auth.service";
import authRouter from "./routes/auth.routes";
import serverConfig from "./server.config";
import connectMongo from "connect-mongo";
import mongoose from "mongoose";

const appLoader = app => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Declare Session Store
  const MongoStore = connectMongo(session);

  // Middleware: creates the session, sets the session cookie and creates the session object in req object
  app.use(
    session({
      secret: serverConfig.secret,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
      resave: false,
      saveUninitialized: false
    })
  );
  
  // Middleware: initialize Instance of Passport as defined at ./util/auth.service
  app.use(passport.initialize());

  // Midddleware: session will be established and maintained via a cookie set in the user's browser.
  // will serialize and deserialize User instances to and from the session.
  app.use(passport.session());

  // Load API routes for Auth
  app.use(serverConfig.api.prefix, authRouter);
  
  console.log("applied loaders");
};
export default appLoader;
