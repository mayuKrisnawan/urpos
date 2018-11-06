import React from 'react';
import { Field } from 'redux-form';

const PriceFieldArray = (props) => {
  const { fields } = props;
  const { name } = fields;

  if (fields.length == 0) {
    fields.push({
      from: 0,
      to: 0,
      price: 0,
    });
  }

  const onAdd = (e) => {
    e.preventDefault();
    fields.push({
      from: 0,
      to: 0,
      price: 0,
    });
  };

  const onDelete = (index) => (e) => {
    e.preventDefault();
    fields.splice(index, 1);
  };

  return (<div style={{ marginBottom: 10 }}>
    {fields.map((field, index) => {
      return (<div key={index}>
        <Field name={`${name}[${index}]from`} placeholder='From' component='input' type='number'/>
        <Field name={`${name}[${index}]to`} placeholder='To' component='input' type='number'/>
        <Field name={`${name}[${index}]price`} placeholder='Price' component='input' type='number'/>
        <button onClick={onDelete(index)}>x</button>
      </div>);    
    })}
    <button onClick={onAdd}>Add More Price</button>
  </div>);
};

export default PriceFieldArray;
