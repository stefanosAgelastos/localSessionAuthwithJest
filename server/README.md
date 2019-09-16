<MainGrid>

<HeaderTitle>
  
# Node.js Session server <br/> with Express & Passport
<TitleAction href="https://github.com/stefanosAgelastos/localSessionAuthwithJest/tree/master/server" label="Go to github repo" />
  
<TitleAction href="" disabled label="See the demo" />
</HeaderTitle>

<InfoGrid>

<InfoPaper>

## About the project
This project is about the backend part of a simple Sign Up - Sign Ip application. It holds information about the user's session by setting a cookie on the user's browser.
Every subsequent request that holds the cookie is used to authorize the user, and to retrieve information about the session e.g. if the user has signed out etc.
User and session persistence is handled by a Mongo noSQL database.
There is also babel configuration to compile ES6 syntax for node, and hot realoading.

</InfoPaper>

<InfoPaper>
<MyChip label="Javascript"/>
<MyChip label="Node.js"/>
<MyChip label="Express.js"/>
<MyChip label="Express-session"/>
<MyChip label="Passport.js"/>
<MyChip label="Mongoose"/>
<MyChip label="Babel"/>
<MyChip label="bcrypt"/>
<MyChip label="jest"/>

</InfoPaper>

</InfoGrid>

<PanelGrid>
<Panel id="1" heading="What?" secondaryHeading="About the technologies I used" >

### The Stack:
- Javascript
- Node.js
- Express.js
- Express-session
- Passport.js
- Mongoose
- Babel
</Panel>

<Panel id="2" heading="For Devs" secondaryHeading="About the project structure" >

### In /src

You will find three .js files, the application starting point `server.js`, the configuration file `server.config.js` to store keys or to read them from the environment and the `server.loader.js` that loads all the middleware to the app.

### in /src/util

You will find all the configuration for the passport middleware that handles authentication and autorization.
**Note** `auth.strategy.js` declares and export the strategy for authenticating the user during signin
**Note** `auth.service.js` configures the methods for serialising and deserializing the User info from the cookie and exports the passport instance with the strategy

### in /src/routes

in ´auth.routes.js´ middleware are assigned per route, and all the routes are exported

### in /src/controllers

in ´auth.controllers.js´ controllers middleware, that handle the last part of a succesfull request. The /signup is open to public and can throw a 409 or a 500, while the rest of the controllers handle requests that have already passed authorization.

### in /src/models

in ´auth.User.js´ declaration of the User model for mongoose and shema methods

</Panel>

<Panel id="3" heading="For Devs" secondaryHeading="Clone and install" >

## How to use

**Note : npm6** is required to install dependencies properly.
**Note : Mongo** must be up and running on your local machine.
Download or clone the repo

```sh
git clone repo-url-here
cd server
```

Install it and run:

```sh
npm install
npm start
```  

</Panel>

<Panel id="4" heading="For Devs" secondaryHeading="NPM scripts" >

## Available Commands

1. `npm start` - starts the development server with hot reloading enabled

2. `npm run build` - compiles and builds

3. `npm run serve` - starts compiled server

4. `npm run test` - runs tests with jest, no tests yet

</Panel>

</PanelGrid>


</MainGrid>