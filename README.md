# Card Game
A simple card game created with React and Redux.<br/>
Rules are simple. The player with the biggest points wins the round. If multiple players draw card with the same value, the winner is the one which played last.

## Build info
App is created with the 'create react app' and it uses all standard scripts.<br/>
To start the project in development mode execute "npm start" command and content will be served at http://localhost:3000

## Project structure
All development files are located in 'src' folder and grouped in folders by their purpose.<br/>
It is good practice to create the folder structure which will make your code modular. With that in mind, folders are created to group modules which could be easily reused. Let's say if I would want to create this game with other UI library or framework, it would be easy to reuse all of the business logic placed in the 'utils' folder.

### assets
Containing 'images' and 'scss' resources.

### components
Each component has its own folder containing component itself along with its style ('sccs' file) and test. Well... tests for components are still missing :/ But that is the first thing I plan to change on this project.<br/>
This approach will prevent from creating the same structure for components, styles, and tests. I find this as a good solution to keep components encapsulated. Downside is that import statements gets a little bit ugly, which could be enhanced by adding in each folder 'package.json' with the definition of the main file so 'Component.js' would available the same way as 'index.js' does, but I decided not to have dozens of 'package.json' files in project and to live with imports as they are right now. That's the part of the code which you don't read to often anyways.

### store
This app uses Redux as a state manager. All 'actions' and 'reducers' live here.

### utils
Files located here are independent either of React or Redux, so they could easily be reused in different setup.<br/>
cardsAPI.js - Has a responsibility to communicate with the deckofcardsapi.com and distribute relevant data to its caller.<br/>
gameEngine.js - Is the brain of this app. All computations and complex methods are here so React can keep on rendering the UI and Redux can keep on managing the store.