import React from 'react'
import '../../style/input.css';

export default function Input({className, placeholder, type, required }) {
  if (required) {
    return (
      <div className="input-wrapper">
        <input type={type} className={`input-control ${className}`} required />       
        <div className="placeholder">{placeholder}<span className="requiredField">*</span></div>
      </div>
    )
  }
  return (
    <div className="input-wrapper">
      <input type={type} className={`${className}`} placeholder={placeholder} />
    </div>
  )
}
