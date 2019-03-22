import { question } from "readline-sync";
const myPokemon = "Gengar";
const OpponentPokemon = "Mr.Mime";
let myPokemonHP = 200;
let OpponentPokemonHP = 100;
const myChoosenSkill = "Shadow Ball";
const opponentChosenSkill = "Psychic";
const DamageByMe = 80;
const DamageByOppo = 50;
const ExistingPoints = 0;
const NewPoints = 0;
const Level = 1;
let isMyTurn = true;
let currentPokemon = myPokemon;

function displayOptions(array) {
  let i = 0;
  while (i < 3) {
    console.log(i + ". " + array[i].Name + ", DAmage:" + array[i].Damage);

    // i += 1
    i = i + 1;
  }
}

//console.log("Available Moves \n :");
const move = [
  {
    Name: "Shadow Ball",
    Damage: 100
  },
  {
    Name: "Tackle",
    Damage: 5
  },
  {
    Name: "Hyper Beak",
    Damage: 150
  },
  {
    Name: "Body Slam",
    Damage: 75
  }
];
//displayOptions(move);
//let MoveChosen = question("Choose your move :\n");

// 1. You have encounter your opponent Mr Mine.
console.log(
  "You have ecounter " + OpponentPokemon + " with HP :" + OpponentPokemonHP
);
// 2. You send in Gengar.
console.log("You sent in " + myPokemon + " with HP :" + myPokemonHP);
// 3. You can choose one of Gengar's skills

// 3. Gengar use shadow ball. Shadow Ball hits for 50 DMG.
//console.log(myPokemon + ' uses ' + myChoosenSkill)
// 4. Critical Hit. Enemy fainted because health reduced to 0/

while (myPokemonHP > 0 && OpponentPokemonHP > 0) {
  console.log("------------------------------");
  let attackerName = isMyTurn ? myPokemon : OpponentPokemon;
  let defenderName = isMyTurn ? OpponentPokemon : myPokemon;
  // first pokemon attacks
  console.log(
    "Pokemon: " +
      attackerName +
      "is now attacking , Available Moves for " +
      attackerName +
      " is : \n"
  );
  console.log("***********************************");
  displayOptions(move);
  console.log("***********************************\n");
  let MoveChosen = question("Choose his move :\n");
  //console.log(attackerName + " is now using Shadow Ball");
  //console.log('Shadow Ball hits for 50 damage')

  if (isMyTurn) {
    //console.log("His Shadow Ball hits for " + DamageByMe + " damage");
    OpponentPokemonHP = OpponentPokemonHP - DamageByMe;
    console.log("\n");
    console.log("########## BANG !!!!!! ########");
    console.log(defenderName + "'s health is reduced to " + OpponentPokemonHP);
  } else {
    //console.log("His shadow Ball hits for " + DamageByOppo + " damage");
    myPokemonHP = myPokemonHP - DamageByOppo;
    console.log(defenderName + "'s health is reduced to " + myPokemonHP);
  }

  // TODO: switch turns
  isMyTurn = !isMyTurn;
}

if (OpponentPokemonHP <= 0) {
  console.log(OpponentPokemon + " faints");
  console.log("========GAME OVER==========");
} else if (myPokemonHP <= 0) {
  console.log(myPokemon + " faints");
  console.log("========GAME OVER==========");
}
