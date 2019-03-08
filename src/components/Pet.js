import React from 'react';

export default function Pet(props) {
  return (
    <section className="pet">
      <header>
        <h2>{props.pet.name}</h2>
        <img
          src={props.pet.imageURL}
          alt={props.pet.imageDescription}
        />
      </header>
      <main>
        <dl>
          <dt>Sex</dt>
          <dd>{props.pet.sex}</dd>
          <dt>Age</dt>
          <dd>{props.pet.age}</dd>
          <dt>Breed</dt>
          <dd>{props.pet.breed}</dd>
          <dt>Story</dt>
          <dd>{props.pet.story}</dd>
        </dl>
        <button onClick={() => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>
  );
}