import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (reduxState) => ({
  reduxState,
});

class PlantList extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({ type: 'FETCH_ELEMENTS' });
  }

  render() {
    return (
      <div>
        <h3>This is the plant list</h3>
        <ul>
          {this.props.reduxState.plantList.map((plantItem) => (
            <li key={plantItem.id}>Name: {plantItem.name}</li>
          ))}
        </ul>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlantList);
