import { Done } from "@mui/icons-material";
import Edit from "@mui/icons-material/Edit";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	TextField,
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
		//// can use useState for dynamic update in the components
	const [personName, setPersonName] = useState(props.name);
	const [ age, setAge ] = useState( props.age );
	const [ email, setEmail ] = useState( props.email );
	const [now, setNow] = useState(props.date.toLocaleString()); // Cannot send date object directly
	const [editView, setEditView] = useState(false);

	// helpers
	const getLogo = () => {
		const personNameParts = personName.split(" ");
		let logo = personName[0];
		if (personNameParts.length === 1) logo += personName[1];
		else
			logo = logo += personNameParts
				.filter((val, index) => index === personNameParts.length - 1)
				.map((val) => val.trim().substring(0, 1))
				.join("");
		return logo;
	};

	// actions
	const savePerson = () => {
		setPersonName("arjun");
		setNow(new Date().toLocaleString());
	};
	const cardActionHandler = () => {
		if( editView ) {
			savePerson();
		}
		setEditView( !editView );
	};
	return (
		<Card className="person-card">
			<CardHeader
				title={getLogo().toUpperCase()}
				className="person-card__logo"
			/>
			<CardContent>
				{/* we can use dynamic data using {}*/}
				{
					editView ? <TextField placeholder="Person Name"></TextField> : <div className="person-card__name">{personName}</div>
				}
				<div className="person-card__age">{age}</div>
				<div className="person-card__email">{email}</div>
				
				<div className="person-card__loggedIn">Updated: {now}</div>
			</CardContent>
			<CardActions>
				<Button
					startIcon={editView ? <Done /> : <Edit />}
					sx={{ "margin-left": "auto" }}
					onClick={cardActionHandler}
				>
					{editView ? "Done" : "Edit"}
				</Button>
			</CardActions>
		</Card>
	);
}

export default PersonCard;
