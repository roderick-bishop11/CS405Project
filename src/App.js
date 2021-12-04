import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPerson] = useState(data)
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPerson(newPerson)
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
