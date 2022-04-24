import React from "react";
import { Grid, Button } from "@mui/material";

//List returns a Material UI Grid that shows all of the people
const List = ({ people}) => {
	const detailsPerson = () => {
		console.log("yay, you will see a detail card here");
	};
	return (
		<Grid container spacing={3}>
			{people.map((person) => (
				<Grid item xs key={person.name}>
					<img src={`${person.image}`} width="164" height="164"></img>
					<Button variant="outlined" onClick={detailsPerson}>{person.name}</Button>
				</Grid>
			))}
		</Grid>
	);
};

export default List;
