import React from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';

function Dashboard(props) {
  return (
    <main>
      <header>
        <h1>Evan and Derek's Redistribution of Pets</h1>
      </header>
      <Pet pet={props.catToAdopt} onAdoptPet={() => console.log('Whatever')} />
      <Pet pet={props.dogToAdopt} onAdoptPet={() => console.log('Duuuuude...')} />
    </main>
  );
}

export default connect()(Dashboard);
