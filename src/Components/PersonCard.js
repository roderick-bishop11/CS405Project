//we will build a card for each person here

import { CardHeader } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const PersonCard = ({ person }) => {
	return (
		<Card>
			<CardContent>
				<CardHeader title={`${person.name}, ${person.age}`}/>
				<CardMedia
					component="img"
					height="200"
					width="200"
					image={person.image}
					alt={person.name}
                    
				/>

			</CardContent>
		</Card>
	);
};

export default PersonCard;
