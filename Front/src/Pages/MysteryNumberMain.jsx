import React, { useState } from 'react';
import "./MysteryNumberMain.css";
import failedImage from '../failed.png';

// import { GiFeather } from "react-icons/gi";
{/* <GiFeather /> */ }






// const handleResult = (number) => {
//   let message = '';
//   let currentAttempt = 4 - chance;
//   if (chance > 0) {
//     if (number < mysteryNumber) {
//       message = `${currentAttempt}${currentAttempt === 1 ? 'st' : currentAttempt === 2 ? 'nd' : currentAttempt === 3 ? 'rd' : 'th'} Try : ${number} ? ... +`;
//     } else if (number > mysteryNumber) {
//       message = `${currentAttempt}${currentAttempt === 1 ? 'st' : currentAttempt === 2 ? 'nd' : currentAttempt === 3 ? 'rd' : 'th'} Try :${number} ? ... -`;
//     } else if (number === mysteryNumber) {
//       message = `${currentAttempt}${currentAttempt === 1 ? 'st' : currentAttempt === 2 ? 'nd' : currentAttempt === 3 ? 'rd' : 'th'} Try :${number} <br>Congratulations!`;
//       setGameOver(true);
//     }
//     setChance(chance - 1);
//   } else {
//     message = `${currentAttempt}${currentAttempt === 1 ? 'st' : currentAttempt === 2 ? 'nd' : currentAttempt === 3 ? 'rd' : 'th'} Try :${number}  <br> The mystery number was ${mysteryNumber}.`;
//     setGameOver(true);
//   }
//   setChance(chance - 1);

//   setResult(prevResult => prevResult.concat(message));


// };

const MysteryNumberMain = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [chance, setChance] = useState(1);
  const [result, setResult] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  const mysteryNumber = Math.floor(Math.random() * 100) + 1;
  console.log(mysteryNumber);

  const handleNumberClick = (number) => {
    if (!gameOver) {
      setSelectedNumber(number);
      handleResult(number);
      console.log(selectedNumber)
    }
  };

  const [level, setLevel] = useState(1);


const handleLevelClick = (level) => {
  setLevel(level);
  setSelectedNumber('');
}

const levelNumbControll = () => {
  const numbers = [];
  let start, end;
  if (level === 1) {
    start= 1;
    end=10;
  }
  if (level === 2) {
    start= 1;
    end=50;
  }
  if (level === 3) {
    start= 1;
    end=100;
  }
  for (let i= start; i <= end; i++){
    numbers.push(
      <button key={i} className="numberBtn" onClick={() => handleNumberClick(i)}>
          {i}
      </button>
  );
  }
  return numbers;
};



  const handleResult = (number) => {
    let message = '';
    if (chance <= 3) {
      if (number < mysteryNumber) {
        message = `${chance}${chance === 1 ? 'st' : chance === 2 ? 'nd' : chance === 3 ? 'rd' : 'th'} Try : ${number} ? ... +`;
      } else if (number > mysteryNumber) {
        message = `${chance}${chance === 1 ? 'st' : chance === 2 ? 'nd' : chance === 3 ? 'rd' : 'th'} Try : ${number} ? ... -`;
      } else if (number === mysteryNumber) {
        message = `${chance}${chance === 1 ? 'st' : chance === 2 ? 'nd' : chance === 3 ? 'rd' : 'th'} Try : ${number} Congratulations!You guessed the mystery number`;
        setGameOver(true)
      }

      setChance(chance + 1);


    } else {
      message = `Sorry, you ran out of chances. The mystery number was ${mysteryNumber}.`;
      setGameOver(true)
    }
    setResult(prevResult => prevResult.concat(message));
  };


  return (
    <div className="mysteryNumberGame">
      <div className='title'>
        <h1>Mystery Number</h1>
      </div>
      <div className='content'>
        <div className='left'>
          <div className='numbers'>
            {levelNumbControll()}
          </div>
          <div className='levels'>
            <button className= {level === 1 ? 'level active' : 'level'} onClick={() => handleLevelClick(1)}>Level 1</button>
            <button className= {level === 2 ? 'level active' : 'level'} onClick={() => handleLevelClick(2)}>Level 2</button>
            <button className= {level === 3 ? 'level active' : 'level'} onClick={() => handleLevelClick(3)}>Level 3</button>
           
          </div>

        </div>

        {/* <div className='restartSection'>
          <button>Restart</button>
        </div> */}


        <div className='right'>
          {result.map((message, index) => (
            <p key={index}>{message}</p>
          ))}      </div>
      </div>
    </div>
  );
};

export default MysteryNumberMain;
