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

  //commented out code from our original
  // return <h2>reminder project setup</h2>;
//   return (
//     <>
//     <h3
//   style={{
//     backgroundColor: '#fff',
//     color: '#313174',
//     textAlign: 'center',
//     fontSize: '36px',
//     marginTop: '70px'
//   }}
//   >
//   {person.length} birthdays today
// </h3>

//     {person.map((person) => {
//       const { id, name, image } = person
//       return (
//         <div className="container" key={id}>
//           <div className="avatar">

//           <div> img src={image} alt={name} </div>

//           {/* carousel
//           <li><img class="img1" src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' /> </li> */}

//           {   /* // add the rest of the images in a list "li"
//               // add buttons for navigatio */ }

//           <div>
//             <h3>{name}</h3>
//         </div>

//         <div className="button">
//             <button className="container button"onClick={() => removePerson(id)}
//               Dismiss /> <button/>
//           </div>
//         </div>
//       )
//     })}
//   </>
//   )
// }

// this is also a viable option, We'd need to edit the CSS tho.
// const [people, setPeople] = useState(data)
// const removePerson = (id) => {
//   let newPerson = people.filter((person) => person.id !== id)
//   setPeople(newPerson)
// }
// return (
//   <>
//     <h3
//       style={{
//         backgroundColor: '#fff',
//         color: '#313174',
//         textAlign: 'center',
//         fontSize: '36px',
//         marginTop: '70px'
//       }}
//     >
//       {people.length} birthdays today
//     </h3>
//     {people.map((person) => {
//       const { id, name, image } = person

//       return (
//         <div className='container' key={id}>
//           <div className='avatar'>
//             <img src={image} alt={name} />
//             <h3>{name}</h3>
//           </div>
//           <div className='button'>
//             <button className='btn' onClick={() => removePerson(id)}>
//               Dismiss
//             </button>
//           </div>
//         </div>
//       )
//     })}
//   </>
// )
