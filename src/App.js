import React, { useState } from "react";
import data from "./data";
// import List from "./Components/List";
import PersonCard from "./Components/PersonCard";
import ReactElasticCarousel from "react-elastic-carousel";

const App = () => {
	// const [people, setPerson] = useState(data);
	const [people] = useState(data);


	return (
		<main>
			<section className="container">
				<h3>{people.length} birthdays today</h3>
			</section>
			{/* <List people={people} setPerson={setPerson}/> */}
			<ReactElasticCarousel>
				{people.map(person => 
					<PersonCard key={person.name} person={person}></PersonCard>
				)}
			</ReactElasticCarousel>
			{/* <button onClick={() => setPerson("")}>clear all</button> */}

		</main>
	);
};
export default App;
