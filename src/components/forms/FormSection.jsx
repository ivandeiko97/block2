import React from 'react'
import ContactInfo from './componentsForm/ContactForm/ContactInfo';
import FormSearch from './componentsForm/FormSearch/FormSearch';
import './style/style.css';

export default function FormSection() {
  return (
    <div className="formSection">
      <ContactInfo />
      <FormSearch />
    </div>
  )
}
