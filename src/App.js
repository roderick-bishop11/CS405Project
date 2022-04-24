import React, { useState } from "react";
import data from "./data";
import List from "./Components/List";

const App = () => {
	const [people, setPerson] = useState(data);

	return (
		<main>
			<section className="container">
				<h3>{people.length} birthdays today</h3>
			</section>
			<List people={people} setPerson={setPerson}/>
			<button onClick={() => setPerson("")}>clear all</button>

		</main>
	);
};
export default App;
