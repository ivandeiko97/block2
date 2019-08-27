import React, { useState } from 'react';
import '../../style/select.css';

export default function Select({listOption, selectedOption, className}) {
  const [value, setValue] = useState(selectedOption)
  const [showList, setDisplayList] = useState(false)

  function optionHandler({ target }) {
    setValue(target.innerHTML);
    setDisplayList(false);
  }
  return (
    <div className={`select ${className} ${showList ? 'select-priory' : 'select-closedList'}`}>
      <div 
        className={`select-option select-option__selected ${showList ? 'openList' : ''}`}
        onClick={() => setDisplayList(!showList)}
      >
        {value}
        {value === selectedOption ? <span className="requiredField">*</span> : null }
      </div>
      <div className={`select-displayList ${showList ? 'select-displayList__show' : ''}`}>
        {listOption.map(option => {
          if (option === value) {
            return null;
          };
          return <div
            key={option} 
            className="select-option"
            onClick={(event) => optionHandler(event)}
          >
            {option}
          </div>
        })}
      </div>
    </div>
  )
}
