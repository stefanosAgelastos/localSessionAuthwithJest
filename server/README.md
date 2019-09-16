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

### in /src/util


</Panel>

<Panel id="3" heading="How?" secondaryHeading="About my process" >

### Here there should be a "diary" of my process

</Panel>

<Panel id="4" heading="For Devs" secondaryHeading="Clone and install" >

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

<Panel id="5" heading="For Devs" secondaryHeading="Make your own version of this site" >

## Getting Started

These instructions here should be explaining which parts of the code you should change in order to host your own projects in development and production. ALso instructions on how to easily customise the theme. WILL UPDATE SOON.


</Panel>
<Panel id="6" heading="For Devs" secondaryHeading="Ok, now what?" >

## Available Commands

1. `npm run dev` - starts the development server with hot reloading enabled

2. `npm run build` - [builds](https://nextjs.org/docs#production-deployment) for production ahead of time

3. `npm run start` - starts the production server

4. `npm run export` - [exports the website as static files](https://nextjs.org/docs#static-html-export)

5. `npm run serve` - serves the static files on localhost (you need [serve](https://www.npmjs.com/package/serve) installed)

6. `npm run publish` - for pushing code to github pages branch: runs a series of commands, that keep in /out your CNAME and .nojekyl files and pushes /out as a subtree to your master branch

7. `npm run fast` - runs `build & export & publish` in a sequence for fast deployment to github pages

## Happy Coding!
</Panel>

</PanelGrid>


</MainGrid>