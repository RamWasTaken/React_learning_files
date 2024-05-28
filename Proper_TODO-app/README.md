## Todo app

This folder contains simple todo app.
It has following features:

- Anyone can create a Todo
- Anyone can see their existing Todos
- Anyone can mark Todo as done

# Backend start

## create a BackEnd Folder

intialize a node project
ie. put a package.json file here // contains all info about what packages u are using , what all scripts u have.
steps: 
- go to BackEnd folder in terminal 
- npm init -y
> answer the questions.
> this will create a package.json file in the folder.

- npm install express
- npm install jsonwebtoken

> since only fs(library) is bundled with node, we need to install express(library) and jsonwebtoken seprately they will be added to node_modules folder and mentioned under name dependencies in package.json file.

> - node modules are heavy
## Node modules are never shared
> - we need node modules Only when running the app otherwise we can even delete them
> - but how will you know which modules to install when you are running the app on a different machine?
> - so we have package.json file which contains all the info about the packages we are using and the scripts we have.
> - so when we run npm install, it will install all the packages mentioned in the package.json file.

## someone wants to run this app on their machine
- they will clone the repo
- they will go to the BackEnd folder
- they will run npm install
- they will run npm start
- now they have all node modules and they can run the app.

# Frontend Start