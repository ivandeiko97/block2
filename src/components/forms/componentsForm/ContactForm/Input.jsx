import React, { useState } from 'react'
import '../../style/input.css';

export default function Input({className, placeholder, type, required }) {
 const [displayHolder, setDisplayHolder] = useState(true);
 const [value, setValue] = useState('');
 
 function changeValue({ target }) {
   if (target.value.trim() !== '') {
     setValue(target.value)
   } else {
      setDisplayHolder(true);
   }
 };
  return (
    <div className={className} onClick={() => setDisplayHolder(false)}>
      <input type={type} defaultValue={value} onBlur={(event) => changeValue(event)}/>
      <label className={`${displayHolder && value === '' ? '' : 'animatedPlaceholder'}`}>
        {placeholder}
        {required ?  <span className="requiredField">*</span> : null}
      </label>
    </div>
  )
}
