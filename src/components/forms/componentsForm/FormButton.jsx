import React from 'react'
import '../style/btn.css';

export default function FormButton({className, textButton}) {
  return (
    <button className={className}>
      {textButton}
    </button>
  )
}
