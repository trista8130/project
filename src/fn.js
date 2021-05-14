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
  while (listArr.length < num) {
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

const cardList = [
  [
    { num: 1, img: "", color: "hearts" },
    { num: 1, img: "", color: "spades" },
    { num: 1, img: "", color: "diamonds" },
    { num: 1, img: "", color: "clubs" },
  ],
  [
    { num: 2, img: "", color: "hearts" },
    { num: 2, img: "", color: "spades" },
    { num: 2, img: "", color: "diamonds" },
    { num: 2, img: "", color: "clubs" },
  ],
  [
    { num: 3, img: "", color: "hearts" },
    { num: 3, img: "", color: "spades" },
    { num: 3, img: "", color: "diamonds" },
    { num: 3, img: "", color: "clubs" },
  ],
  [
    { num: 4, img: "", color: "hearts" },
    { num: 4, img: "", color: "spades" },
    { num: 4, img: "", color: "diamonds" },
    { num: 4, img: "", color: "clubs" },
  ],
  [
    { num: 5, img: "", color: "hearts" },
    { num: 5, img: "", color: "spades" },
    { num: 5, img: "", color: "diamonds" },
    { num: 5, img: "", color: "clubs" },
  ],
  [
    { num: 6, img: "", color: "hearts" },
    { num: 6, img: "", color: "spades" },
    { num: 6, img: "", color: "diamonds" },
    { num: 6, img: "", color: "clubs" },
  ],
  [
    { num: 7, img: "", color: "hearts" },
    { num: 7, img: "", color: "spades" },
    { num: 7, img: "", color: "diamonds" },
    { num: 7, img: "", color: "clubs" },
  ],
  [
    { num: 8, img: "", color: "hearts" },
    { num: 8, img: "", color: "spades" },
    { num: 8, img: "", color: "diamonds" },
    { num: 8, img: "", color: "clubs" },
  ],
  [
    { num: 9, img: "", color: "hearts" },
    { num: 9, img: "", color: "spades" },
    { num: 9, img: "", color: "diamonds" },
    { num: 9, img: "", color: "clubs" },
  ],
  [
    { num: 10, img: "", color: "hearts" },
    { num: 10, img: "", color: "spades" },
    { num: 10, img: "", color: "diamonds" },
    { num: 10, img: "", color: "clubs" },
  ],
  [
    { num: 11, img: "", color: "hearts" },
    { num: 11, img: "", color: "spades" },
    { num: 11, img: "", color: "diamonds" },
    { num: 11, img: "", color: "clubs" },
  ],
  [
    { num: 12, img: "", color: "hearts" },
    { num: 12, img: "", color: "spades" },
    { num: 12, img: "", color: "diamonds" },
    { num: 12, img: "", color: "clubs" },
  ],
  [
    { num: 13, img: "", color: "hearts" },
    { num: 13, img: "", color: "spades" },
    { num: 13, img: "", color: "diamonds" },
    { num: 13, img: "", color: "clubs" },
  ],
];

// const res = randomArr(6, cardList);

// console.log(res);




