import React, { useState } from 'react';
import "./MysteryNumberMain.css";
import failedImage from '../failed.png';

// import { GiFeather } from "react-icons/gi";
{/* <GiFeather /> */}




const MysteryNumberMain = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [chance, setChance] = useState(3);
  const [result, setResult] = useState('');

  const mysteryNumber = Math.floor(Math.random() * 100) + 1;
  
  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    handleResult(number);
  };

  const handleResult = (number) => {
    let message = '';
    if (chance > 0) {
      if (number < mysteryNumber) {
        message = `${chance}${chance < 2 ? 'st' : 'st'} Try ${number} ? ... +`;
      } else if (number > mysteryNumber) {
        message = `${chance}${chance < 2 ? 'nd' : 'nd'} Try ${number} ? ... -`;
      } else {
        message = `${chance}${chance < 2 ? 'd' : 'd'} Try ${number} Congratulations!`;
      }
      setChance(chance - 1);
    } else {
      message = `Sorry, you ran out of chances. The mystery number was ${mysteryNumber}.`;
    }
    setResult(message);
  };


  return (
    <div className="mysteryNumberGame">
      <div className='title'>
        <h1>Mystery Number</h1>
      </div>
      <div className='left'>
        <div className='numbers'>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
            <button key={number} className="numberBtn" onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
        </div>
        <div className='resultSection'>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default MysteryNumberMain;
