import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import actions from './actions';
const { fetchCat, fetchDog } = actions;

class Dashboard extends Component {
  componentDidMount() {
    return Promise.all([
      this.props.dispatch(fetchCat()),
      this.props.dispatch(fetchDog())
    ]);
  }

  render() {
    console.log(this.props.catToAdopt);
    return (
      <main>
        <header>
          <h1>Evan and Derek's Redistribution of Pets</h1>
        </header>
        {this.props.catToAdopt && (
          <Pet
            pet={this.props.catToAdopt}
            onAdoptPet={() => console.log('Whatever')}
          />
        )}
        {this.props.dogToAdopt && (
          <Pet
            pet={this.props.dogToAdopt}
            onAdoptPet={() => console.log('Duuuuude...')}
          />
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    catToAdopt: state.cat.data,
    dogToAdopt: state.dog.data
  };
};

export default connect(mapStateToProps)(Dashboard);
