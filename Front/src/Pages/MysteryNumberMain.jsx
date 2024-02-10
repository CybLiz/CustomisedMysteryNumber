import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./MysteryNumberMain.css";
 


const MysteryNumberMain = () => {
	return (
    
<div className="mysterNumberGame">
  <div className='title'>
    <h1>Mystery Number</h1>
  </div>
  <div className='numberSection'>
  <button className='level'>Level 1</button>
  <button className='level'>Level 2</button>
  <button className='level' >Level 3</button>

  </div>
  <div className='restartSection'>
  <button>Restart</button>

  </div>
  
  <div className='resultSection'></div>

    </div>

    
	)
}

export default MysteryNumberMain;