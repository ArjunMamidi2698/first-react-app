import "./PersonCardGroup.css";
import PersonCard from "./PersonCard";
import { Container, Grid, Card, CardHeader } from "@mui/material";

function PersonCardGroup() {
	const persons = [
		{
			name: "Arjun Mamidi",
			age: 23,
			email: "aj@gmail.com",
			date: new Date(),
		},
		{
			name: "Mallikharjun Mamidi",
			age: 25,
			email: "mm@gmail.com",
			date: new Date(),
		},
		{
			name: "AJ Mamidi",
			age: 23,
			email: "ajm@gmail.com",
			date: new Date(),
		},
		{
			name: "Naga Venkata Mallikharjuna Rao Mamidi",
			age: 24,
			email: "nvmrm@gmail.com",
			date: new Date(),
		},
		{
			name: "Mallikharjuna Rao Mamidi",
			age: 25,
			email: "mrm@gmail.com",
			date: new Date(),
		},
		{
			name: "Arjun",
			age: 22,
			email: "arjun@gmail.com",
			date: new Date(),
		},
	];
	return (
		<Container>
			<Card className="person-card-group">
				<h1 className="person-card-group__title">Persons</h1>
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
					{persons.map((person, index) => (
						<Grid item xs={4}>
							<PersonCard
								key={"key-"+index}
								name={person.name}
								age={person.age}
								email={person.email}
								date={person.date}
							/>
						</Grid>
					))}
				</Grid>
			</Card>
		</Container>
	);
}

export default PersonCardGroup;
