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

    this.onAddItem = (values) => {
      this.props.Item.create(values);
      this.props.Form.change("item", "name", "");
      alert("Item created");
    };
  }

  componentDidMount() {
    this.props.Item.loadAllPending();
    setTimeout(() => {
      this.props.Item.loadAllFulfilled();
    }, 1000);
  }

  render() {
    const { items, isLoading } = this.props;

    return (<div style={{ padding: "50px 100px 50px" }}>
      <div style={{ marginBottom: 50 }}>
        <ItemForm onSubmit={this.onAddItem}/>
      </div>
      <ItemTable items={items} isLoading={isLoading}/>
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
