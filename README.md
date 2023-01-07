# odin-project-knight-travails

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns.

This is a project from TOP, which finds the shortest path a knight would take from a given staring square to the end square.

Each square is in a 2D array, with 0 based indexing. Each square is represented by a 2 element array giving its row and coumn in the board.

The knightTravails() factory can be used by importing it in the file where you want to use it

```js
import {knightTravails} from .\knight-travails.js
```

Make an object of knightTravails() and call the knightMoves() function from it proving the starting and ending move as arguements

```js
const obj = knightTravails();
//               start   end
obj.knightMoves([3, 3], [2, 1]);
```

It will console log the number of steps it took and then the sqaures travelled.
