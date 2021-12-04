import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPerson] = useState(data)
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPerson(newPerson)
  }
return (
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>

      <div class="carousel">
        <button class="carousel_prev_btn" id="previous"></button>
        <div class="carousel_images">
          {/* I think there is something missing on line below, still looks like a list from List.js, maybe we're missing some CSS???  */}
          <List people={people} />  
        </div>
        <button class="carousel_next_btn" id="next"></button>
        <button onClick={() => setPerson([])}>clear all</button>
      </div>

    </section>
  </main>
)
}
export default App
