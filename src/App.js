import React, { useEffect, useState } from "react";
import cardList from "./cardList";
import { randomArr } from "./fn";
import bg from "./cards/blue_back.png";

function App() {
  const [playList, setPlayList] = useState(null);
  const [showList, setShowList] = useState([]);
  const [pairList, setPairList] = useState([]);
  const [win, setWin] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const res = randomArr(4, cardList); //set amount
    setPlayList(res);
    const list = new Array(4 * 2).fill(false);
    setShowList(list);
  }, [reset]);
  useEffect(() => {
    if (pairList && pairList.length === 2) {
      console.log(pairList[1].num);
      let firstCard = pairList[0];
      let secondCard = pairList[1];
      if (firstCard.num !== secondCard.num) {
        function resetShow() {
          showList[firstCard.i] = false;
          showList[secondCard.i] = false;
          setShowList([...showList]);
        }

        setTimeout(resetShow, 500);
      }
      setPairList([]);
    }
    //console.log(showList);
    let checkWin = [...showList];
    const res = checkWin.filter((ele) => ele == true);
    if (res.length == 4 * 2) {
      //use set amount
      setWin(true);
    }
  }, [pairList]);

  const handleClick = (i, num) => {
    showList[i] = true;
    setShowList([...showList]);

    if (pairList.length <= 1) {
      pairList.push({ i, num });
      setPairList([...pairList]);
    }
  };
  const handleHide = () => {
    setWin(false);
    setReset(!reset);
  };

  const handleReset = () => {
    setReset(!reset);
  };
  console.log(reset);
  return (
    <div>
      <div className="header">
        <h1>Flip Cards Game</h1>
        <br></br>

        <button onClick={handleReset}>RESET</button>
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
                  <div className="cards__box__back">
                    <img src={card.img} alt="card"></img>
                  </div>
                ) : (
                  <div className="cards__box__front">
                    <img src={bg} alt="bg"></img>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      {win && (
        <div className="win" onClick={handleHide}>
          <div className="win__box">
            <p>YOU WIN!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
