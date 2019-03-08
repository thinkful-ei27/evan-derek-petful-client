import React from 'react';

function Dashboard(props) {
  return (
    <main>
      <section className="cat">
        <header>
          <h2>{props.catToAdopt.name}</h2>
          <img
            src={props.catToAdopt.imageURL}
            alt={props.catToAdopt.imageDescription}
          />
        </header>
        <main>
          <dl>
            <dt>Sex</dt>
            <dd>{props.catToAdopt.sex}</dd>
            <dt>Age</dt>
            <dd>{props.catToAdopt.age}</dd>
            <dt>Breed</dt>
            <dd>{props.catToAdopt.breed}</dd>
            <dt>Story</dt>
            <dd>{props.catToAdopt.story}</dd>
          </dl>
        </main>
      </section>
      <section>
        <header>
          <h2>{props.dogToAdopt.name} </h2>
          <img
            src={props.dogToAdopt.imageURL}
            alt={props.dogToAdopt.imageDescription}
          />
        </header>
        <main>
          <dl>
            <dt>Sex</dt>
            <dd>{props.dogToAdopt.sex}</dd>
            <dt>Age</dt>
            <dd>{props.dogToAdopt.age}</dd>
            <dt>Breed</dt>
            <dd>{props.dogToAdopt.breed}</dd>
            <dt>Story</dt>
            <dd>{props.dogToAdopt.story}</dd>
          </dl>
        </main>
      </section>
    </main>
  );
}

export default Dashboard;
