import "./PersonCardGroup.css";
import PersonCard from "./PersonCard";
import { Container, Grid, Card, CardHeader } from "@mui/material";
import { PersonAddAlt1Rounded } from "@mui/icons-material";
import { useState } from "react";

function PersonCardGroup() {
	const [persons, setPersons] = useState([
		{
			personId: 1,
			name: "Arjun Mamidi",
			age: 23,
			email: "aj@gmail.com",
			date: new Date(),
		},
		{
			personId: 2,
			name: "Mallikharjun Mamidi",
			age: 25,
			email: "mm@gmail.com",
			date: new Date(),
		},
		{
			personId: 3,
			name: "AJ Mamidi",
			age: 23,
			email: "ajm@gmail.com",
			date: new Date(),
		},
		{
			personId: 4,
			name: "Naga Venkata Mallikharjuna Rao Mamidi",
			age: 24,
			email: "nvmrm@gmail.com",
			date: new Date(),
		},
		{
			personId: 5,
			name: "Mallikharjuna Rao Mamidi",
			age: 25,
			email: "mrm@gmail.com",
			date: new Date(),
		},
		{
			personId: 6,
			name: "Arjun",
			age: 22,
			email: "arjun@gmail.com",
			date: new Date(),
		},
	]);
	const [addView, setAddView] = useState(false);
	const updatePerson = (personId, updatedPerson) => {
		let editedPerson = persons.find(
			(person) => person.personId === personId
		);
		if (editedPerson) {
			editedPerson = { ...editedPerson, ...updatedPerson };
		} else {
			persons.push(updatedPerson);
		}
		setPersons(persons);
		setAddView(false);
	};
	return (
		<Container>
			<Card className="person-card-group">
				<h1 className="person-card-group__title">
					Persons
					<PersonAddAlt1Rounded
						className="person-add-icon"
						onClick={() => setAddView(true)}
					/>
				</h1>
				{/* <PersonCard /><PersonCard /> */} {/* Without props*/}
				{/* <PersonCard
				name={persons[0].name}
				age={persons[0].age}
				email={persons[0].email}
				date={persons[0].date}
			/>
			<PersonCard
				name={persons[1].name}
				age={persons[1].age}
				email={persons[1].email}
				date={persons[1].date}
			/>
			*/}
				{/* we can loop like below */}
				<Grid container>
					{addView ? (
						<Grid item xs={4}>
							<PersonCard
								key="add-new-person"
								editView={true}
								updatePersons={updatePerson}
								personId={
									persons[persons.length - 1].personId + 1
								}
							/>
						</Grid>
					) : (
						""
					)}
					{persons.map((person, index) => (
						<Grid item xs={4}>
							<PersonCard
								key={"key-" + index}
								name={person.name}
								age={person.age}
								email={person.email}
								date={person.date}
								updatePersons={updatePerson}
								personId={person.personId}
							/>
						</Grid>
					))}
				</Grid>
			</Card>
		</Container>
	);
}

export default PersonCardGroup;
