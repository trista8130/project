//0-12,  *arr.length
//0-3,   *4
function randomNum() {
  return Math.floor(Math.random() * 13); //13 cards
}
function randomColor() {
  return Math.floor(Math.random() * 4); //4 color
}
let arr = [2, 11, 37, 42];

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export function randomArr(num, arr) {
  let listArr = [];
  let res = [];
  let indexArr = [];
  while (indexArr.length < num) {
    let index = randomNum();
    if (!indexArr.includes(index)) {
      indexArr.push(index);
    }
  }
  for (const i of indexArr) {
    listArr.push(arr[i]);
  }

  for (const list of listArr) {
    let index = randomColor();
    res.push(list[index], list[index]);
  }
  return shuffle(res);
}
