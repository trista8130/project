import React, { useEffect, useState } from "react";
import cardList from "./cardList";
import { randomArr } from "./fn";
import bg from "./cards/blue_back.png";

function App() {
  const [playList, setPlayList] = useState(null);
  const [showList, setShowList] = useState([]);
  const [pairList, setPairList] = useState([]);

  useEffect(() => {
    const res = randomArr(4, cardList); //set amount
    setPlayList(res);
    const list = new Array(4 * 2).fill(false);
    setShowList(list);
  }, []);
  useEffect(() => {
    if (pairList && pairList.length === 2) {
      console.log(pairList[1].num);
      let firstCard = pairList[0];
      let secondCard = pairList[1];
      if (firstCard.num !== secondCard.num) {
        setPairList([]);
        console.log(showList);
        showList[firstCard.i] = false;
        // setTimeout({showList[secondCard.i] = false},200)
       showList[secondCard.i] = false;
        setShowList([...showList]);
      }
    
      //console.log(pairList);
    }
  }, [pairList]);
  console.log(showList);
  const handleClick = (i, num) => {
    console.log(i);
    showList[i] = true;
    setShowList([...showList]);

    if (pairList.length <= 1) {
      pairList.push({ i, num });
      setPairList([...pairList]);
    }
    //console.log(showList);
    //console.log(pairList);
  };

  return (
    <div>
      <div className="header">
        <h1>Flip cards game</h1>
        <br></br>
        <h3>Please enter cards amount you would like to play!</h3>
        <input></input>
        <p>You can only choose amount from 1 to 13!</p>
      </div>
      <div className="cards">
        {playList &&
          playList.map((card, i) => {
            return (
              <div
                key={i}
                className="cards__box"
                onClick={() => handleClick(i, card.num)}
              >
                {showList[i] ? (
                  <img src={card.img} alt="card"></img>
                ) : (
                  <img src={bg} alt="bg"></img>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
