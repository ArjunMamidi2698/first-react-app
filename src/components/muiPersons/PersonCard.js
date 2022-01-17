import { Close, Done } from "@mui/icons-material";
import Edit from "@mui/icons-material/Edit";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Grid,
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
	const [personName, setPersonName] = useState(props.name || null);
	const [age, setAge] = useState(props.age || null);
	const [email, setEmail] = useState(props.email || null);
	const [now, setNow] = useState(props.date?.toLocaleString() || null); // Cannot send date object directly
	const [editView, setEditView] = useState(props.editView || false);

	const [newPerson, setNewPerson] = useState({});
	// helpers
	const getLogo = () => {
		const personNameParts = personName?.split(" ");
		if (personNameParts) {
			let logo = personName[0];
			if (personNameParts?.length === 1) logo += personName[1];
			else
				logo = logo += personNameParts
					.filter(
						(val, index) => index === personNameParts.length - 1
					)
					.map((val) => val.trim().substring(0, 1))
					.join("");
			return logo;
		}
		return "";
	};

	// actions
	const savePerson = () => {
		setPersonName(newPerson.name || personName);
		setAge(newPerson.age || age);
		setEmail(newPerson.email || email);
		setNow(new Date().toLocaleString());
		props.updatePersons(props.personId, {
			...newPerson,
			date: new Date().toLocaleString(),
		});
	};
	const cardActionHandler = () => {
		if (editView) {
			savePerson();
		}
		setEditView(!editView);
	};
	const inputChangeHandler = (field, value) => {
		// setNewPerson({ ...newPerson, [field]: value });
		// why use like below? => react schedules updating states, so there is a chance of skipping the updation of a state before it has to be
		// below way will consider as latest state.
		setNewPerson((prevState) => {
			return {
				...prevState,
				[field]: value,
			};
		});
	};
	const cancelButton = (
		<Button
			startIcon={<Close/>}
			sx={{ "margin-left": "auto" }}
			onClick={() => {setEditView(false);props.cancelAddHandler();}}
		>
			cancel
		</Button>
	);
	return (
		<Card className="person-card">
			<CardHeader
				title={getLogo().toUpperCase()}
				className="person-card__logo"
			/>
			{editView ? (
				<CardContent>
					<Grid container spacing={2} direction="column">
						<Grid item>
							<TextField
								label="Person Name"
								defaultValue={personName}
								onChange={(e) =>
									inputChangeHandler("name", e.target.value)
								}
							></TextField>
						</Grid>
						<Grid item>
							<TextField
								label="Age"
								defaultValue={age}
								onChange={(e) =>
									inputChangeHandler("age", e.target.value)
								}
							></TextField>
						</Grid>
						<Grid item>
							<TextField
								label="Email"
								defaultValue={email}
								onChange={(e) =>
									inputChangeHandler("email", e.target.value)
								}
							></TextField>
						</Grid>
					</Grid>
				</CardContent>
			) : (
				<CardContent>
					{/* we can use dynamic data using {}*/}
					<div className="person-card__name">{personName}</div>
					<div className="person-card__age">{age}</div>
					<div className="person-card__email">{email}</div>
					<div className="person-card__loggedIn">Updated: {now}</div>
				</CardContent>
			)}
			<CardActions>
				{/* we can also use elements by defining as variables or functions for linear code */}
				{editView ? cancelButton : ""}
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
