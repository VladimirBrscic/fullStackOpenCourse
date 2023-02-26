import React from "react";

const Person = ({ person,deletePerson }) => {
  return (
    <div>
      <li>
        {person.name} {person.number}
        <button onClick={()=> deletePerson(person.id,person.name)}>delete</button>
      </li>
    </div>
  );
};

export default Person;
