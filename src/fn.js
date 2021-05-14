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
  while (listArr.length < num / 2) {
    let index = randomNum();
    if (arr[index]) {
      listArr.push(arr[index]);
      arr[index] = null;
    }
  }

  for (const list of listArr) {
    let index = randomColor();
    res.push(list[index], list[index]);
  }
  return shuffle(res);
  //return res;
}

// const cardList = [
//   [
//     { num: 1, img: ".*", color: "hearts" },
//     { num: 1, img: ".*", color: "spades" },
//     { num: 1, img: ".*", color: "diamonds" },
//     { num: 1, img: ".*", color: "clubs" },
//   ],
//   [
//     { num: 2, img: ".*", color: "hearts" },
//     { num: 2, img: ".*", color: "spades" },
//     { num: 2, img: ".*", color: "diamonds" },
//     { num: 2, img: ".*", color: "clubs" },
//   ],
//   [
//     { num: 3, img: ".*", color: "hearts" },
//     { num: 3, img: ".*", color: "spades" },
//     { num: 3, img: ".*", color: "diamonds" },
//     { num: 3, img: ".*", color: "clubs" },
//   ],
// ];

// const res = randomArr(6, cardList);

// console.log(res);
