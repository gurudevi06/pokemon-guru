import { question } from "readline-sync";
const Winner = "";
let isPlayer_1Turn = true;
let CanContinue = true;
let GameEnded = false;
let GameWon = false;
let GameWon1 = false;

function displayOptions(array) {
  let i = 0;
  while (i < 1) {
    console.log(
      array[0].Value + " | " + array[1].Value + " | " + array[2].Value
    );
    console.log(
      array[3].Value + " | " + array[4].Value + " | " + array[5].Value
    );
    console.log(
      array[6].Value + " | " + array[7].Value + " | " + array[8].Value
    );
    // i += 1
    i = i + 1;
  }
}

//console.log("Available Moves \n :");
const position = [
  {
    Block: 0,
    Value: "0",
    Locked: "N"
  },
  {
    Block: 1,
    Value: "1",
    Locked: "N"
  },
  {
    Block: 2,
    Value: "2",
    Locked: "N"
  },
  {
    Block: 3,
    Value: "3",
    Locked: "N"
  },
  {
    Block: 4,
    Value: "4",
    Locked: "N"
  },
  {
    Block: 5,
    Value: "5",
    Locked: "N"
  },
  {
    Block: 6,
    Value: "6",
    Locked: "N"
  },
  {
    Block: 7,
    Value: "7",
    Locked: "N"
  },
  {
    Block: 8,
    Value: "8",
    Locked: "N"
  }
];

function Play() {
  let i = 0;
  while (i < 9 || GameWon === false) {
    if (isPlayer_1Turn) {
      const Player = "Player 1";
      let BlockChosen = question("Hi " + Player + " , Choose your position : ");

      //ValidateInput(BlockChosen);
      position[BlockChosen].Value = "X";
      position[BlockChosen].Locked = "Y";

      checkAnyoneWin(Player, GameWon);

      console.log("***********************************");
      displayOptions(position);
      console.log("***********************************\n");
      //   // TODO: switch turns
    } else {
      const Player = "Player 2";
      let BlockChosen = question("Hi " + Player + " , Choose your position : ");

      position[BlockChosen].Value = "O";
      position[BlockChosen].Locked = "Y";
      checkAnyoneWin(Player, GameWon);

      console.log("***********************************");
      displayOptions(position);
      console.log("***********************************\n");
      //   // TODO: switch turns
    }

    isPlayer_1Turn = !isPlayer_1Turn;
    // i += 1
    i = i + 1;
  }
}

// function ValidateInput(BlockChosen) {
//   if ((position[BlockChosen].Locked = "Y") || position[BlockChosen].Block > 8) {
//     console.log("********* INVALID INPUT ************");
//   }

//   return;
// }

//   }

function checkAnyoneWin(Player, GameWon1) {
  if (
    //Combination # 1
    (position[0].Value == position[1].Value &&
      position[1].Value == position[2].Value) ||
    //Combination # 2
    (position[3].Value == position[4].Value &&
      position[4].Value == position[5].Value) ||
    //combination # 3
    (position[6].Value == position[7].Value &&
      position[7].Value == position[8].Value) ||
    //Combination # 4
    (position[0].Value == position[3].Value &&
      position[3].Value == position[6].Value) ||
    //Combination # 5
    (position[1].Value == position[4].Value &&
      position[4].Value == position[7].Value) ||
    //combination # 6
    (position[2].Value == position[5].Value &&
      position[5].Value == position[8].Value) ||
    //combination # 7
    (position[0].Value == position[4].Value &&
      position[4].Value == position[8].Value) ||
    //combination # 8
    (position[3].Value == position[4].Value &&
      position[4].Value == position[6].Value)
  ) {
    GameWon = true;
    console.log("Game Won by " + Player);
    console.log("======GAME OVER=======\n\n");
  }
}

console.log("***********************************");
displayOptions(position);
console.log("***********************************\n");
Play();
