import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, set People] = useState{data}
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }
 
  // return <h2>reminder project setup</h2>;
 
    {people.map((person) => {
      const { id, name, Picture } = person
      
      return (
        <div className="container" key=(id)>
          <div className="avatar">
          <div>
            img scr={image} alt={name} />
          </div>
            
          <div>
            <h3>{name}</h3>
          </div>
          </div>
      )
                
}

export default App;
