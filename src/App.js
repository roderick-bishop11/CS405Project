import React, { useState } from 'react';
import data from './data';//Imported data models
import List from './List';//Imported structure of list
//Beginning of app
function App() {
//Initialize the Variables that need to be tracked using useState()
  const [people] = useState(data)
  const [setPerson] = useState(data)
  //A new value of id is given to the variable from newPerson
  //newPerson variable is assigned a new person given the current id and the given id
  //  are not the same value or type
  
//   const [people, setPerson] = useState(data)
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPerson(newPerson)
  }

  
  // Here is the HTML that is loaded onto the webpage
  return (
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
    //Create the carousel
      <div class="carousel">
    // added previous button
        <button class="carousel_prev_btn" id="previous"></button>
     //vertical list of people in our data model
        <div class="carousel_images">
          <List people={people} />
        </div>
    // added next button
        <button class="carousel_next_btn" id="next"></button>
    // clear all button; on click list is cleared 
        <button onClick={() => setPeople("")}>clear all</button>
      </div>

    </section>
  </main>
)
}
export default App