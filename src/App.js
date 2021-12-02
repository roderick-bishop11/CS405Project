import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [person] = useState{data}
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
            
      //carousel
          <li><img class="img1" src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',></li>
      // add the rest of the images in a list "li"
      
      // add buttons for navigation 

      
          <div>
            <h3>{name}</h3>
          </div>
          </div>
          
          <div className="button">
            <button className="btn" onClick={() => removePerson(id)}
            Dismiss </button>
          </div>
        </div> 
      )
     }
    }
export default App;
