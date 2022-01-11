import Edit from "@mui/icons-material/Edit";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
} from "@mui/material";
import { useState } from "react";
import "./PersonCard.css";

function PersonCard(props) {
	// parameter can be any name

	// const personName = "Arjun Mamidi";
	// let logo = personName[ 0 ];
	// if( personNameParts.length === 1 ) logo += personName[ 1 ];
	// else logo = logo += personNameParts.filter( ( val,index ) => index === personNameParts.length-1 ).map( val => val.trim().substring( 0,1 ) ).join( '' );
	// const age = 23;
	// const email = "aj@gmail.com";
	// const now = new Date().toUTCString(); // Cannot send date object directly

	//// can use from props instead of hardcoded
	// let personName = props.name;
	const [ personName, setPersonName ] = useState( props.name );
	const personNameParts = personName.split(" ");
	let logo = personName[0];
	if (personNameParts.length === 1) logo += personName[1];
	else
		logo = logo += personNameParts
			.filter((val, index) => index === personNameParts.length - 1)
			.map((val) => val.trim().substring(0, 1))
			.join("");
	const age = props.age;
	const email = props.email;
	// const now = props.date.toLocaleString(); // Cannot send date object directly
	const [ now, setNow ] = useState( props.date.toLocaleString() ); // Cannot send date object directly
	const editPerson = () => {
		setPersonName( "arjun" );
		setNow( new Date().toLocaleString() );
		setEditView( true );
	};

	const [ editView, setEditView ] = useState( false );
	return (
		<Card className="person-card">
			<CardHeader
				title={logo.toUpperCase()}
				className="person-card__logo"
			/>
			<CardContent>
				{/* we can use dynamic data using {}*/}
				<div className="person-card__name">{personName}</div>
				<div className="person-card__age">{age}</div>
				<div className="person-card__email">{email}</div>
				<div className="person-card__loggedIn">Updated: {now}</div>
			</CardContent>
			<CardActions>
				<Button startIcon={<Edit />} sx={{"margin-left":"auto"}} onClick={editPerson}>
					{
						editView ? "Done": "Edit"
					}
				</Button>
			</CardActions>
		</Card>
	);
}

export default PersonCard;
