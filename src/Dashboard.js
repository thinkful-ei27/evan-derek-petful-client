import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import actions from './actions';
import './Dashboard.css';

const { adoptCat, adoptDog, fetchCat, fetchDog } = actions;

class Dashboard extends Component {
  componentDidMount() {
    return Promise.all([
      this.props.dispatch(fetchCat()),
      this.props.dispatch(fetchDog())
    ]);
  }

  render() {
    return (
      <main class="container">
        <header class="app-header">
          <h1>Evan and Derek's Redistribution of Pets</h1>
          <p>Because, when it comes down it, all cats and dogs are the same.</p>
        </header>
        <section class="pets">
          {this.props.catToAdopt && (
            <Pet
              pet={this.props.catToAdopt}
              onAdoptPet={() => this.props.dispatch(adoptCat())}
            />
          )}
          {this.props.dogToAdopt && (
            <Pet
              pet={this.props.dogToAdopt}
              onAdoptPet={() => this.props.dispatch(adoptDog())}
            />
          )}
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    catToAdopt: state.cat.data,
    dogToAdopt: state.dog.data
  };
};

export default connect(mapStateToProps)(Dashboard);
