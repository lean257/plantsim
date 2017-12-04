### Hi I'm a game! You will take care of a tree and see if you can win!
### I need Node >= 6
### I'm currently still in development - check out my ToDo list for future improvements. 
### [I use create-react-app boilerplate](https://github.com/facebookincubator/create-react-app)
### I follow airbnb ESlinter, without any semicolon

### Start me
`npm install`
`npm start`

### Run my tests
`npm test`

### Rules
1. The plants will only die at midnight.
2. If you water or trim more than 3 times or less than 1 in any given day, you will lose.
3. If you get to level 4 and have not lost, you have won. 

### ToDo
1. Store the timestamp in an array so I can always check any time interval for lost conditions. Currently the time interval for lost condition is fixed at 24 hours. 
2. Implement more game logics such as More Sun and Less Sun.
3. Connects to a database so players can save the game and come back, or share the game with other players.
4. Have a stop and resume button for the timer
5. Timer needs to stop the moment the game is won or lost

