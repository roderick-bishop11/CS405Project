import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }
 

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


//new code from here: 
//we should be able to define the crousel somewhere around line 64
return (
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} /> {/* <--this is an import from list.js We should be able to replace this with the carousel and manipulate the CSS here  */}
      <button onClick={() => setPeople([])}>clear all</button>
    </section>
  </main>
)
}
export default App





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
