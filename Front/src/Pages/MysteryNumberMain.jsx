import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./MysteryNumberMain.css";



const MysteryNumberMain = () => {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(<button key={i} className="numberBtn">{i}</button>);
  }
  
  return (
    <div className="mysteryNumberGame">
      <div className='title'>
        <h1>Mystery Number</h1>
      </div>

      <div className='left'>
        <div className='numbers'>{numbers}</div>

        <div className='levels'>
          <button className='level'>Level 3</button>
          <button className='level'>Level 2</button>
          <button className='level'>Level 1</button>
        </div>
      
        {/* <div className='restartSection'>
          <button>Restart</button>
        </div> */}

      </div>
       <div className='right'>
       <div className='resultSection'></div>

       </div>
    </div>
  );
}

export default MysteryNumberMain;
