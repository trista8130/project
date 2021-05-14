import React, { useEffect, useState } from "react";
import cardList from "./cardList";
import { randomArr } from "./fn";

function App() {
  const [playList, setPlayList] = useState(null);
  console.log(randomArr(6, cardList));

  useEffect(() => {
    const res = randomArr(6, cardList);
    setPlayList(res);
  }, []);
  console.log(playList);
  return (
    <div className="App">
      123
      {playList &&
        playList.map((card, i) => (
          <div key={i}>
            <div>{card.num}</div>
            <div>{card.color}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
