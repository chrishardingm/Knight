//Script by Chris Harding.
//This script will calculate any available move positions for a knight piece.
//There are 8 rows and 8 columns, the rows will be X and the columns Y (x,y).
//This script Assumes that the position (0,0) starts in the bottom left corner.

//This variable represents the Knights starting position.
//You can change this variable and get different results from the program.
//The first number is the knights X position and the second number is the Y position.
var knightPosition = [1, 2];
console.log("The knights current position is", knightPosition)


//This is an array for the final possible positions the knight can move to.
var allPossibleMoves = []

//This is a function that will take the knights current position and apply new X and Y values to create a new position.
function calculateMoves (x,y) {
  var newPosition = [knightPosition[0] + x]
  newPosition.push(knightPosition[1] + y)
  
  //This will check that both numbers are positive before adding them to the array.
  //This will aslo check to make sure both numbers are less than nine.
  //This is because the chess piece is not allowed to leave the board.
  if (newPosition[0] >0 && newPosition[1] >0 && newPosition[0] <9 && newPosition[1] <9) {
  allPossibleMoves.push(newPosition)
  }
}

//The Knight has a total of eight possible moves. 
//The calculatemoves function will need to run eight times to check for all possibilities.
calculateMoves (2,1);
calculateMoves (1,2);
calculateMoves (-2,-1);
calculateMoves (-1,-2);

calculateMoves (2,-1);
calculateMoves (-1,2);
calculateMoves (-2,1);
calculateMoves (1,-2);

//Print the final results to the console.
console.log("The knight can move to the following positions")
console.log(allPossibleMoves)

//I decided to do this method because I wanted to make it as simple as I could without a lot of unnecessary code.
//Creating a function to handle the calculation helped with this since the command can be called more than once.
//Any code that repeats more than once should ideally be put into a function to help clean things up. 