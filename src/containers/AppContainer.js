import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as itemActions from '../actions/item';
import * as formActions from '../actions/form';

import ItemForm from '../components/Forms/ItemForm';
import ItemTable from '../components/Item/ItemTable';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      editedItem: null,
    };

    this.onCommitAdd = (values) => {
      this.props.Item.create(values);
      this.props.Form.change("item", "name", "");
      alert("Item created");
      this.onCancelAdd();
    };

    this.onAdd = () => {
      this.setState({ isAdd: true });
    };
    
    this.onCancelAdd = () => {
      this.setState({ isAdd: false });
    };

    this.onEdit = (editedItem) => (e) => {
      e.preventDefault();
      this.setState({ editedItem });
      const values = {...editedItem};
      this.props.Form.init("item", values);
    };

    this.onCancelEdit = () => {
      this.setState({ editedItem: null });
    };

    this.onCommitEdit = (values) => {
      const { editedItem } = this.state;
      const { id } = editedItem;
      this.props.Item.update(id, values);
      this.onCancelEdit();
    };
  }

  componentDidMount() {
    this.props.Item.loadAllPending();
    setTimeout(() => {
      this.props.Item.loadAllFulfilled();
    }, 1000);
  }

  render() {
    const { isAdd, editedItem } = this.state;
    const { items, isLoading } = this.props;
    
    return (<div style={{ padding: "50px 100px 50px" }}>
      <div style={{ marginBottom: 50 }}>
        {!isAdd && !editedItem && <button onClick={this.onAdd}>Add Item</button>}
        {isAdd && <React.Fragment>
          <strong>Add Item</strong>
          <ItemForm onSubmit={this.onCommitAdd} onCancel={this.onCancelAdd}/>
        </React.Fragment>}
        {editedItem && <React.Fragment>
          <strong>Edit Item</strong>
          <ItemForm onSubmit={this.onCommitEdit} onCancel={this.onCancelEdit}/>
        </React.Fragment>}
      </div>
      <ItemTable items={items} isLoading={isLoading}
        onEdit={this.onEdit}/>
    </div>);
  }
}

function mapStateToProps(state) {
  const { items, isLoading } = state.items;
  return {
    items,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Form: bindActionCreators(formActions, dispatch),
    Item: bindActionCreators(itemActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
