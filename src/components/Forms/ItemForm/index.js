import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import PriceFieldArray from './PriceFieldArray';

class ItemForm extends React.Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    const { onCancel } = this.props;

    return (<form onSubmit={handleSubmit}>
      <div>
        <label>Item Name</label>
        <div>
          <Field name='name' component='input' type='text'
            placeholder='Item Name'/>
        </div>
        <div>
          <FieldArray name='prices' component={PriceFieldArray}/>
        </div>
        <div>
          <button type='submit'>Save</button>
          {" "}
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div> 
    </form>);
  }
}

export default reduxForm({
  form: "item",
})(ItemForm);
