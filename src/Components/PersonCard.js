//we will build a card for each person here

import { CardActionArea, CardHeader } from "@material-ui/core";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";


const toBirthday = (date) =>{
	var currentYr = new Date().getFullYear();
	const plainLangBirthday = new Date(date);
	var month = plainLangBirthday.toLocaleString("en-US", { month: "long" });
	var day = plainLangBirthday.getDate();
	
	return `${month} ${day}, ${currentYr}`;
};

const handleClick = () => { 
	console.log("Button Was Clicked");
};

const PersonCard = ({ person }) => {
	return (
		<Card>
			<CardActionArea onClick={handleClick}>
				<CardContent>
					<CardHeader title={`${person.name}, ${person.age}`}/>
					<CardMedia
						component="img"
						height="200"
						width="200"
						image={person.image}
						alt={person.name}
					/>
					<Typography variant="h5">
						{person.birthday? toBirthday(person.birthday): "Text"}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

//TODO: functions on the card
//TODO: state of the data of the card (for delete or change)
export default PersonCard;
