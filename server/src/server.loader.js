import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "./util/auth.service";
import authRouter from "./routes/auth.routes";
import serverConfig from "./server.config";
import connectMongo from "connect-mongo";
import mongoose from "mongoose";

const appLoader = app => {

  /**
   * Middleware that transforms the raw string of req.body into json
   */
  app.use(bodyParser.json());

  /**
   * Declare Session Store
   */
  const MongoStore = connectMongo(session);

  /**
   * Set Cross Origin Resource Sharing to origin from request headers
   * Allows Cross Origin with credentials
   */
  app.use(cors({ origin: true, credentials: true }));

  /**
   *Middleware: creates the session, sets the connect.sid cookie and creates the session object in req object
   */
  app.use(
    session({
      secret: serverConfig.secret,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        httpOnly: false
      }
    })
  );

  /**
   * Middleware: initialize Instance of Passport as defined at ./util/auth.service
   */
  app.use(passport.initialize());

  /**
   * Midddleware:
   * Based on the session id of the cookie, connect.sid
   * will serialize and deserialize User instances from the session id,
   * methods defined in auth.service
   */
  app.use(passport.session());
  
  /**
   * Load API routes for Auth
   */
  app.use(serverConfig.api.prefix, authRouter);

  console.log("applied loaders");
};
export default appLoader;
