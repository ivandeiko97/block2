import React from 'react';
import '../../style/radio.css';

export default function Radio() {
  return (
    <div className="contact-radio">
      <label className="radio">
        <input type="radio" name="contact" />
        <div className="radio__text">Prefer e-mail</div>
      </label>
      <label className="radio">
        <input type="radio" name="contact"/>
        <div className="radio__text">Prefer phone</div>
      </label>
    </div>
  )
}
