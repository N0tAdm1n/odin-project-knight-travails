function MoveNode(currentMove, previousMove = null) {
  return {
    squareName: currentMove,
    nextMove1: null,
    nextMove2: null,
    nextMove3: null,
    nextMove4: null,
    nextMove5: null,
    nextMove6: null,
    nextMove7: null,
    nextMove8: null,
    previousMove: previousMove,
  };
}

function knightTravails() {
  let start;

  function knightMoves(startMove, endMove) {
    start = MoveNode(startMove);
    // console.log(start);
    let endNode = makeMoveTree(start, endMove);

    let path = [];

    while (endNode != null) {
      path.unshift(endNode.squareName);

      endNode = endNode.previousMove;
    }

    console.log(`You made it in ${path.length - 1} moves! Here is your path:`);
    path.forEach((node) => console.log(node));
  }

  function makeMoveTree(move, end) {
    let queue = [];

    queue.push(move);
    // console.log(queue.shift());
    // console.log(move.squareName);
    // console.log(end);
    // console.log(checkEqual(move.squareName, end));

    while (queue.length > 0) {
      let tempMove = queue.shift();

      if (checkEqual(tempMove.squareName, end)) return tempMove;

      fillNextMove(tempMove);
      //   console.log(tempMove.currentMove);

      if (tempMove.nextMove1) queue.push(tempMove.nextMove1);
      if (tempMove.nextMove2) queue.push(tempMove.nextMove2);
      if (tempMove.nextMove3) queue.push(tempMove.nextMove3);
      if (tempMove.nextMove4) queue.push(tempMove.nextMove4);
      if (tempMove.nextMove5) queue.push(tempMove.nextMove5);
      if (tempMove.nextMove6) queue.push(tempMove.nextMove6);
      if (tempMove.nextMove7) queue.push(tempMove.nextMove7);
      if (tempMove.nextMove8) queue.push(tempMove.nextMove8);
    }

    return move;
  }

  function fillNextMove(move) {
    if (checkMove([move.squareName[0] + 2, move.squareName[1] + 1]))
      move.nextMove1 = MoveNode(
        [move.squareName[0] + 2, move.squareName[1] + 1],
        move
      );

    if (checkMove([move.squareName[0] + 2, move.squareName[1] - 1]))
      move.nextMove2 = MoveNode(
        [move.squareName[0] + 2, move.squareName[1] - 1],
        move
      );

    if (checkMove([move.squareName[0] - 2, move.squareName[1] + 1]))
      move.nextMove3 = MoveNode(
        [move.squareName[0] - 2, move.squareName[1] + 1],
        move
      );

    if (checkMove([move.squareName[0] - 2, move.squareName[1] - 1]))
      move.nextMove4 = MoveNode(
        [move.squareName[0] - 2, move.squareName[1] - 1],
        move
      );

    if (checkMove([move.squareName[0] + 1, move.squareName[1] + 2]))
      move.nextMove5 = MoveNode(
        [move.squareName[0] + 1, move.squareName[1] + 2],
        move
      );

    if (checkMove([move.squareName[0] + 1, move.squareName[1] - 2]))
      move.nextMove6 = MoveNode(
        [move.squareName[0] + 1, move.squareName[1] - 2],
        move
      );

    if (checkMove([move.squareName[0] - 1, move.squareName[1] + 2]))
      move.nextMove7 = MoveNode(
        [move.squareName[0] - 1, move.squareName[1] + 2],
        move
      );

    if (checkMove([move.squareName[0] - 1, move.squareName[1] - 2]))
      move.nextMove8 = MoveNode(
        [move.squareName[0] - 1, move.squareName[1] - 2],
        move
      );
  }

  function checkMove(arr) {
    if (arr[0] >= 0 && arr[0] < 8 && arr[1] >= 0 && arr[1] < 8) return true;
    else return false;
  }

  function checkEqual(arrA, arrB) {
    return JSON.stringify(arrA) === JSON.stringify(arrB);
  }

  return {
    knightMoves,
  };
}

let test = knightTravails();
test.knightMoves([3, 3], [4, 3]);
