import React from 'react';
import Select from './Select';

export default function InfoCar() {
  const listCar = ['Audi', 'Nissan', 'Volkswagen', 'Mitsubishi'];
  const listTypeCar = ['Any type (New and Pre-Owned)', 'New', 'Pre-Owned'];
  const listYearFrom = ['From 1999', 'From 2000'];
  const listYearTo = ['To 2019', 'To 2018'];
  const listModel = ['Q5', 'Q7', 'Q8', 'Q3'];

  return (
    <section className="infoCar">
      <div className="infoCar-leftSection">
        <Select listOption={listTypeCar} className="select-carType" selectedOption="Any type (New and Pre-Owned)" />
        <Select listOption={listCar} className="select-car" selectedOption="Audi" />
      </div>
      <div className="infoCar-rightSection">
        <div className="infoCar-yearInfo">
           <Select listOption={listYearFrom} className="select-year" selectedOption="From 1999" />
           <span className="devide" />
           <Select listOption={listYearTo} className="select-year" selectedOption="To 1999" />
        </div>
        <Select className="select-model" listOption={listModel} selectedOption="Q5" />
        <div className="infoCar-specific">
          <Select className="select-trim" listOption={['some text1', 'some text2']} selectedOption="trim" />
          <Select className="select-color" listOption={['black', 'white']} selectedOption="color" />
        </div>
      </div>
    </section>
  )
}
