let tally = document.querySelector("h1");
let tallyN = 0;
let blocksPerBox = 4;
let tallyBlocks = 0;
let tallyTowers = 0;
let tallyShelves = 0;
let tallyBoxes = 0;

let one = document.querySelector(".plus-one");
let four = document.querySelector(".plus-four");
let five = document.querySelector(".plus-five");
let six = document.querySelector(".plus-six");

let towers = document.querySelector(".towers div");
let shelves = document.querySelector(".shelves div");
let blocks = document.querySelector(".blocks div");
let boxes = document.querySelector(".boxes div");

let threePer = document.querySelector(".three-per");
let fourPer = document.querySelector(".four-per");
let fivePer = document.querySelector(".five-per");
let reset = document.querySelector(".reset");
let customReset = document.querySelector(".reset-custom");
let resetAmount = document.querySelector(".reset-amount");
let customAdd = document.querySelector(".add-custom");
let customAmount = document.querySelector(".custom-amount");
let customPerAdd = document.querySelector(".add-custom-per");
let customPerAmount = document.querySelector(".custom-per");

tally.innerText = tallyN;
towers.innerText = tallyTowers;
shelves.innerText = tallyShelves;
blocks.innerText = tallyBlocks;
boxes.innerText = tallyBoxes;

one.addEventListener("click", incrimentOne);
four.addEventListener("click", incrimentFour);
five.addEventListener("click", incrimentFive);
six.addEventListener("click", incrimentSix);

threePer.addEventListener("click", makeThree);
fourPer.addEventListener("click", makeFour);
fivePer.addEventListener("click", makeFive);

reset.addEventListener("click", tallyReset);
customReset.addEventListener("click", tallyResetCustom);
customAdd.addEventListener("click", tallyAddCustom);
customPerAdd.addEventListener("click", setCustomPer);



function setVars() {
    tallyTowers = Math.floor(tallyN / (blocksPerBox * 21));
    towers.innerText = tallyTowers;
    tallyShelves = Math.floor(
      (tallyN % (blocksPerBox * 21)) / (blocksPerBox * 3)
    );
    shelves.innerText = tallyShelves;
    tallyBoxes = Math.floor((tallyN % (blocksPerBox * 3)) / blocksPerBox);
    boxes.innerText = tallyBoxes;
    tallyBlocks = tallyN % blocksPerBox;
    blocks.innerText = tallyBlocks;
    if (tallyN > 9999) {
        tallyN = 0;
        tally.innerText=tallyN;
        setVars();
    }
}

function setCustomPer() {
    if (Number(customPerAmount.value) == 0 || (Number(customPerAmount.value) == '') {
        alert('X must be above 0.');
        return
    }
    blocksPerBox = Number(customPerAmount.value);
    setVars();
    customPerAdd.classList.add('active');
    threePer.classList.remove("active");
    fourPer.classList.remove("active");
    fivePer.classList.remove("active");
}

function tallyReset() {
  tallyN = 0;
  tallyTowers = 0;
  tallyShelves = 0;
  tallyBoxes = 0;
  tallyBlocks = 0;
  tally.innerText = 0;
  towers.innerText = 0;
  shelves.innerText = 0;
  boxes.innerText = 0;
  blocks.innerText = 0;
}

function tallyResetCustom() {
  tallyReset();
  increment(Number(resetAmount.value));
  resetAmount.value = "";
}

function tallyAddCustom() {
  increment(Number(customAmount.value));
}

function makeThree() {
  blocksPerBox = 3;
  customPerAdd.classList.remove('active');
  threePer.classList.add("active");
  fourPer.classList.remove("active");
  fivePer.classList.remove("active");
  setVars()
}

function makeFour() {
  blocksPerBox = 4;
  customPerAdd.classList.remove('active');
  threePer.classList.remove("active");
  fourPer.classList.add("active");
  fivePer.classList.remove("active");
  setVars()
}

function makeFive() {
  blocksPerBox = 5;
  customPerAdd.classList.remove('active');
  threePer.classList.remove("active");
  fourPer.classList.remove("active");
  fivePer.classList.add("active");
  setVars()
}

function increment(n) {
  tallyN += n;
  tally.innerText = tallyN;
  setVars()
}

function incrimentOne() {
  return increment(1);
}

function incrimentFour() {
  return increment(4);
}

function incrimentFive() {
  return increment(5);
}

function incrimentSix() {
  return increment(6);
}
