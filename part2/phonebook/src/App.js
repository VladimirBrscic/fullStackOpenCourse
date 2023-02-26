import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Message from "./components/Message";
import noteService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFor, setSearchFor] = useState("");
  const [message, setMessage] = useState('')

  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = () => {
    noteService.getAll().then((response) => {
      setPersons(response.data);
    });
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const personExists = persons.find(
      (person) =>
        person.name.toLowerCase() === newPerson.name.toLocaleLowerCase()
    );

    if (personExists) {
      if (
        window.confirm(
          `${personExists.name} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        const personUpdated = { ...personExists, number: newPerson.number };
        noteService.update(personUpdated.id, personUpdated)
        .then( response => {
          setPersons(persons.map(person => person.id !== personUpdated.id ? person : response.data))
          setMessage(`${newPerson.name} number changed`)
          setTimeout(() => {
            setMessage('')
          }, 5000)
          })
        .catch(error => {
          setMessage(` Information of ${newPerson.name} has already been removed from the server`)
          console.log(error);
          setTimeout(() => {
            setMessage('')
          }, 5000)
        })  
        setNewName("");
        setNewNumber("");
      }
    } else {
      noteService.create(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setMessage(` Added ${newPerson.name}`)
        setTimeout(() => {
          setMessage('')
        }, 5000)
      });
      setNewName("");
      setNewNumber("");
    }
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      noteService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const numberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const nameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const search = (event) => {
    setSearchFor(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchFor.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter inputHandler={search} value={searchFor} />
      <PersonForm
        formSubmit={addNewPerson}
        nameHandler={nameInputChange}
        numHandler={numberInputChange}
        nameVal={newName}
        numVal={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
