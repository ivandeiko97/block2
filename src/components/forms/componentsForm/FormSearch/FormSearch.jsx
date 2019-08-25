import React from 'react';
import InfoCar from './InfoCar';
import FormButton from '../FormButton';

export default function FormSearch() {
  return (
    <section className="formSearch">
      <div className="formSearch-wrapper">
        <h1 className="formSearch-h1">CAN'T FIND WHAT YOU LOOKING FOR?</h1>
          <InfoCar />
          <input type="text" className="formSearch-input" placeholder="You message" />
          <p className="formSearch-p">
            By submitting this form, you agree to be contacted with information regarding the vehicle you are searching for
          </p>
          <div className="btn-wrapper">
            <FormButton className="form-btn" textButton="Contact Us" />
          </div>
      </div>
 
    </section>
  )
}
