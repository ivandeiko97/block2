import React from 'react';
import Input from './Input';
import Radio from './Radio';
import FormButton from '../FormButton';

export default function ContactInfo() {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <h2 className="contact-h2">Contact info</h2>
        <p className="contact-text">
          We appreciate your interest in our inventory, 
          and apologize we do not have model details displaying on the website at this time.
        </p>
        <p className="contact-text">
          Please fill the form out below and our team will quickly respond, 
          or, please call us at 765-470-4091 for more information.
        </p>
        <div className="contact-conteinerField">
          <Input type="text" placeholder="First Name" required={true} className="contact-field contact-field__name" />
          <Input type="text" placeholder="Last Name" required={true} className="contact-field contact-field__name" />
          <Input type="text" placeholder="Email" required={true} className="contact-field contact-field__name" />
          <Input type="text" placeholder="Phone" required={false} className="contact-field contact-field__name" />
        </div>
        <div className="contact-sectionBottom">
          <Radio />
          <div className="btn-wrapper">
            <FormButton className="form-btn" textButton="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  )
}
