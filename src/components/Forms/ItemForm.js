import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
