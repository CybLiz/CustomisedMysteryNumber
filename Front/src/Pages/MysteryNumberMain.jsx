import React, { useState, useEffect } from 'react';
import "./MysteryNumberMain.css";
import failedImage from '../failed.png';
import succesImage from '../Succes.png';
import restartImage from '../restart.png';

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
  const [level, setLevel] = useState(1);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [mysteryNumberStorage, setMysteryNumber] = useState(null);


  // const mysteryNumber = Math.floor(Math.random() * 100) + 1;
  // console.log(mysteryNumber);



  useEffect(() => {
    setMysteryNumber(generateMysteryNumber(level));
  }, []);

 const handleRestartClick = () => {
  window.location.reload();

 }

  const handleLevelClick = (level) => {
    setLevel(level);
    setSelectedNumber('');
    // const mysteryNumber = generateMysteryNumber(level);
    setMysteryNumber(generateMysteryNumber(level));

  }

  const generateMysteryNumber = (level) => {
    let start, end;
    if (level === 1) {
      start = 1;
      end = 10;
    }
    if (level === 2) {
      start = 1;
      end = 50;
    }
    if (level === 3) {
      start = 1;
      end = 100;
    }
    return Math.floor(Math.random() * (end - start + 1)) + start;
  };


  const mysteryNumber = generateMysteryNumber(level);
  const handleNumberClick = (number) => {
    if (!gameOver) {
      setSelectedNumber(number);
      handleResult(number, mysteryNumber);
      console.log(selectedNumber)
    }
  };

  const levelNumbControll = () => {
    const numbers = [];
    let start, end;
    if (level === 1) {
      start = 1;
      end = 10;
    }
    if (level === 2) {
      start = 1;
      end = 50;
    }
    if (level === 3) {
      start = 1;
      end = 100;
    }
    for (let i = start; i <= end; i++) {
      numbers.push(
        <button key={i} className="numberBtn" onClick={() => handleNumberClick(i)}>{i}</button>
      );
    }
    return numbers;
  };
  console.log(mysteryNumber);


  const handleResult = (number, mysteryNumber) => {
    let message = '';
    if (chance < 3) {
      if (number < mysteryNumberStorage) { 
        message = `${chance}${chance === 1 ? 'st' : chance === 2 ? 'nd' : chance === 3 ? 'rd' : 'th'} Try : ${number} ? ... +`;
      } else if (number > mysteryNumberStorage) { 
        message = `${chance}${chance === 1 ? 'st' : chance === 2 ? 'nd' : chance === 3 ? 'rd' : 'th'} Try : ${number} ? ... -`;
      } else if (number === mysteryNumberStorage) { 
        message = (
          <div>
            <p>{chance}{chance === 1 ? 'st' : chance === 2 ? 'nd' : chance === 3 ? 'rd' : 'th'} Try : {number}</p>
            <p>Congratulations! You guessed the mystery number</p>
          </div>
        );
        setGameOver(true);
        setSuccess(true);
      }
      setChance(chance + 1);

    } else {
      message = (
        <div>
          <p>{chance === 3 ? `${chance}rd Try : ${number} ` : ''}</p>
          <p>Sorry, you ran out of chances. The mystery number was {mysteryNumberStorage}</p>
        </div>
      );
      setGameOver(true);
      setFailure(true);

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
            <button className={level === 1 ? 'level active' : 'level'} onClick={() => handleLevelClick(1)}>Level 1</button>
            <button className={level === 2 ? 'level active' : 'level'} onClick={() => handleLevelClick(2)}>Level 2</button>
            <button className={level === 3 ? 'level active' : 'level'} onClick={() => handleLevelClick(3)}>Level 3</button>

          </div>

        </div>

        <div className='restartSection'>
        <img src={restartImage} className="restartImage" />
          <button className='restartbtn' onClick={handleRestartClick}>Restart</button>
        </div>


<div className='right'>

<div className='gameOver'>
        {success && <img src={succesImage} alt="Success" />}
        {failure && <img src={failedImage} alt="Failure" />}
        </div>
        <div className='result'>{result.map((message, index) => (
          <p key={index}>{message}</p>
        ))}</div>
        
       
      </div>
      </div>
    </div>
  );
};

export default MysteryNumberMain;
