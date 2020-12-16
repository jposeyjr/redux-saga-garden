import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (reduxState) => ({
  reduxState,
});

const initState = {
  name: '',
  kingdom: '',
  clade: '',
  order: '',
  family: '',
  subfamily: '',
  genus: '',
};
class NewPlantForm extends Component {
  state = {
    newPlant: initState,
  };

  handleChange = (event, input) => {
    this.setState({
      newPlant: {
        ...this.state.newPlant,
        [input]: event.target.value,
      },
    });
  };

  //   addNewPlant = event => {
  //       event.preventDefault();
  //       this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant })
  //       this.setState({
  //           newPlant: {
  //               id: this.state.newPlant.id + 1,
  //               name: '',
  //           }
  //       });
  //   }

  render() {
    return (
      <div>
        <h3>This is the form</h3>
        <pre>{JSON.stringify(this.state)}</pre>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.dispatch({
              type: 'ADD_ELEMENTS',
              payload: this.state.newPlant,
            });
            this.setState({ newPlant: initState });
            event.target.reset();
          }}
        >
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            value={this.state.name}
            onChange={(event) => this.handleChange(event, 'name')}
          />
          <label htmlFor='kingdom'>Kingdom</label>
          <input
            id='kingdom'
            type='text'
            value={this.state.kingdom}
            onChange={(event) => this.handleChange(event, 'kingdom')}
          />
          <label htmlFor='clade'>Clade</label>
          <input
            id='clade'
            type='text'
            value={this.state.clade}
            onChange={(event) => this.handleChange(event, 'clade')}
          />
          <label htmlFor='order'>Order</label>
          <input
            id='order'
            type='text'
            value={this.state.order}
            onChange={(event) => this.handleChange(event, 'order')}
          />
          <label htmlFor='family'>Family</label>
          <input
            id='family'
            type='text'
            value={this.state.family}
            onChange={(event) => this.handleChange(event, 'family')}
          />
          <label htmlFor='subfamily'>subfamily</label>
          <input
            id='subfamily'
            type='text'
            value={this.state.subfamily}
            onChange={(event) => this.handleChange(event, 'subfamily')}
          />
          <label htmlFor='genus'>Genus</label>
          <input
            id='genus'
            type='text'
            value={this.state.genus}
            onChange={(event) => this.handleChange(event, 'genus')}
          />
          <input type='submit' value='Add New Plant' />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewPlantForm);
